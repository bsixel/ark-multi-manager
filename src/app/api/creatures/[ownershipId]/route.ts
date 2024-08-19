import {
  Creature,
  NeoCreatureRelation,
  UniqueSpeciesColorsMap,
} from "@/lib/types/Creature";
import { createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { ownershipId: string } }
) {
  try {
    const { driver } = createSession();

    const query = `
    MATCH (oi:OwnershipInfo {id: $ownershipId})
    MATCH (s:Species)<-[:MEMBER_OF]-(d:Dino)-[:OWNED_BY]->(oi)
        OPTIONAL MATCH (mother:Dino)-[mr:MOTHER_OF]->(d)<-[fr:FATHER_OF]-(father:Dino)
        OPTIONAL MATCH (bestOfSpecies:BestOf)-[:MEMBER_OF]->(s)
        OPTIONAL MATCH (d)-[:ON_MAP]->(map:Map)
        WITH d, s, mother, father, map,
            (d.combinedBaseHealth >= mother.combinedBaseHealth AND d.combinedBaseHealth >= father.combinedBaseHealth AND
            d.combinedBaseStamina >= mother.combinedBaseStamina AND d.combinedBaseStamina >= father.combinedBaseStamina AND
            d.combinedBaseOxygen >= mother.combinedBaseOxygen AND d.combinedBaseOxygen >= father.combinedBaseOxygen AND
            d.combinedBaseFood >= mother.combinedBaseFood AND d.combinedBaseFood >= father.combinedBaseFood AND
            d.combinedBaseSpeed >= mother.combinedBaseSpeed AND d.combinedBaseSpeed >= father.combinedBaseSpeed AND
            d.combinedBaseWeight >= mother.combinedBaseWeight AND d.combinedBaseWeight >= father.combinedBaseWeight AND
            d.combinedBaseMelee >= mother.combinedBaseMelee AND d.combinedBaseMelee >= father.combinedBaseMelee) as bestOfParents
          WITH d{.*, species: s.blueprintPath, speciesLabel: s.label, map: map.id, bestOfParents: bestOfParents } as dinoInfo
    RETURN dinoInfo ORDER BY dinoInfo.speciesLabel ASC, dinoInfo.baseLevel DESC, dinoInfo.name ASC
    `;

    // Fetch stuff like the kinds of tamed critters we've seen etc
    const { records } = await driver.executeQuery(query, {
      ownershipId: params.ownershipId,
    });

    const creatures: Map<string, Creature> = new Map();
    const relations: Map<string, NeoCreatureRelation> = new Map();
    const speciesColors: UniqueSpeciesColorsMap = {};

    records.forEach((record) => {
      const creature = record["_fields"][0] as Creature;

      if (creatures.get(creature.dinoId)) {
        // idk why there's dupes and I'm tired of trying to figure it out
        return; // Skip it's already there
      }

      // Sanitize name/species
      creature.name = creature.name.replace("_", " ");
      creature.speciesLabel = creature.speciesLabel.replace("_", " ");

      // Map all unique colors per species
      if (!speciesColors[creature.blueprintPath]) {
        speciesColors[creature.blueprintPath] = [
          new Set<number>([0]),
          new Set<number>([0]),
          new Set<number>([0]),
          new Set<number>([0]),
          new Set<number>([0]),
          new Set<number>([0]),
          new Set<number>([0]),
        ];
      }
      creature.colors.forEach((color, idx) => {
        speciesColors[creature.blueprintPath][idx].add(color);
      });

      const motherId = creature.mother;
      const fatherId = creature.father;
      creatures.set(creature.dinoId, creature);
      if (motherId && fatherId) {
        const motherRelId = `${motherId}_${creature.dinoId}`;
        relations.set(motherRelId, {
          id: motherRelId,
          source: motherId,
          target: creature.dinoId,
          relationship: "MOTHER_OF",
        });

        const fatherRelId = `${fatherId}_${creature.dinoId}`;
        relations.set(fatherRelId, {
          id: fatherRelId,
          source: motherId,
          target: creature.dinoId,
          relationship: "FATHER_OF",
        });
      }
    });

    const returnableSpeciesColors = {};
    Object.keys(speciesColors).forEach((species) => {
      returnableSpeciesColors[species] = speciesColors[species].map((sc) =>
        Array.from(sc).sort((a: number, b: number) => a - b)
      );
    });

    driver.close();
    return NextResponse.json(
      {
        creatures: [...creatures.values()],
        relations: [...relations.values()],
        speciesColors: returnableSpeciesColors,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: "Unable to fetch creatures!" },
      { status: 500 }
    );
  }
}
