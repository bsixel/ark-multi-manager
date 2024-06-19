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
            d.combinedBaseMelee >= mother.combinedBaseMelee AND d.combinedBaseMelee >= father.combinedBaseMelee) as bestOfParents,
            (d.combinedBaseHealth = min([mother.combinedBaseHealth, father.combinedBaseHealth]) AND
            d.combinedBaseStamina = min([mother.combinedBaseStamina, father.combinedBaseStamina]) AND
            d.combinedBaseOxygen = min([mother.combinedBaseOxygen, father.combinedBaseOxygen]) AND
            d.combinedBaseFood = min([mother.combinedBaseFood, father.combinedBaseFood]) AND
            d.combinedBaseSpeed = min([mother.combinedBaseSpeed, father.combinedBaseSpeed]) AND
            d.combinedBaseWeight = min([mother.combinedBaseWeight, father.combinedBaseWeight]) AND
            d.combinedBaseMelee = min([mother.combinedBaseMelee, father.combinedBaseMelee])) as uselessChild,
            d.wildHealth = bestOfSpecies.wildHealth AND bestOfSpecies.wildHealth <> 0 as hasBestWildHealth,
            d.mutatedHealth = bestOfSpecies.mutatedHealth AND bestOfSpecies.mutatedHealth <> 0 as hasBestMutatedHealth,
            d.wildStamina = bestOfSpecies.wildStamina AND bestOfSpecies.wildStamina <> 0 as hasBestWildStamina,
            d.mutatedStamina = bestOfSpecies.mutatedStamina AND bestOfSpecies.mutatedStamina <> 0 as hasBestMutatedStamina,
            d.wildOxygen = bestOfSpecies.wildOxygen AND bestOfSpecies.wildOxygen <> 0 as hasBestWildOxygen,
            d.mutatedOxygen = bestOfSpecies.mutatedOxygen AND bestOfSpecies.mutatedOxygen <> 0 as hasBestMutatedOxygen,
            d.wildFood = bestOfSpecies.wildFood AND bestOfSpecies.wildFood <> 0 as hasBestWildFood,
            d.mutatedFood = bestOfSpecies.mutatedFood AND bestOfSpecies.mutatedFood <> 0 as hasBestMutatedFood,
            d.wildSpeed = bestOfSpecies.wildSpeed AND bestOfSpecies.wildSpeed <> 0 as hasBestWildSpeed,
            d.mutatedSpeed = bestOfSpecies.mutatedSpeed AND bestOfSpecies.mutatedSpeed <> 0 as hasBestMutatedSpeed,
            d.wildWeight = bestOfSpecies.wildWeight AND bestOfSpecies.wildWeight <> 0 as hasBestWildWeight,
            d.mutatedWeight = bestOfSpecies.mutatedWeight AND bestOfSpecies.mutatedWeight <> 0 as hasBestMutatedWeight,
            d.wildMelee = bestOfSpecies.wildMelee AND bestOfSpecies.wildMelee <> 0 as hasBestWildMelee,
            d.mutatedMelee = bestOfSpecies.mutatedMelee AND bestOfSpecies.mutatedMelee <> 0 as hasBestMutatedMelee
          WITH d{.*, species: s.blueprintPath, speciesLabel: s.label, map: map.name, bestOfParents: bestOfParents, mother: mother.dinoId, father: father.dinoId, hasBestWildHealth, hasBestWildStamina, hasBestWildOxygen, hasBestWildFood, hasBestWildSpeed, hasBestWildWeight, hasBestWildMelee, hasBestMutatedHealth, hasBestMutatedStamina, hasBestMutatedOxygen, hasBestMutatedFood, hasBestMutatedSpeed, hasBestMutatedWeight, hasBestMutatedMelee, hasBestOfSomeStat: hasBestWildHealth OR hasBestWildStamina OR hasBestWildOxygen OR hasBestWildFood OR hasBestWildSpeed OR hasBestWildWeight OR hasBestWildMelee } as dinoInfo
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

      // Sanitize name/species
      creature.name = creature.name.replace("_", " ");
      creature.species = creature.speciesLabel.replace("_", " ");

      // Map all unique colors per species
      if (!speciesColors[creature.species]) {
        speciesColors[creature.species] = [
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
        speciesColors[creature.species][idx].add(color);
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
