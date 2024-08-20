import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { STAT_INDICES } from "@/lib/utils/constants";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { ownershipId, dinos: userDinoInfo, map } = await req.json();
  const results = [];

  try {
    const { driver } = createSession();

    const now = Date.now();

    // userDinoInfo might actually be several, so...
    let allDinoInfo;
    if (Array.isArray(userDinoInfo)) {
      allDinoInfo = userDinoInfo;
    } else {
      allDinoInfo = [userDinoInfo];
    }

    const impactedSpecies = new Set<string>();

    for (
      let dinoEntryIdx = 0;
      dinoEntryIdx < allDinoInfo.length;
      dinoEntryIdx++
    ) {
      const dinoInfo = allDinoInfo[dinoEntryIdx];
      const species = dinoInfo.SpeciesName.trim().replace(" ", "_");

      const nodeSafeDinoInfo = {
        dinoId: `${ownershipId}_${dinoInfo.DinoID1}${dinoInfo.DinoID2}`,
        gender: dinoInfo.IsFemale ? "fem" : "masc",
        neutered: dinoInfo.Neutered ?? false,
        colors: dinoInfo.ColorSetIndices,
        maternalMutations: dinoInfo.RandomMutationsFemale,
        paternalMutations: dinoInfo.RandomMutationsMale,
        baseLevel: dinoInfo.BaseCharacterLevel,
        name: dinoInfo.DinoName || species,
        tribeName: dinoInfo.TribeName,
        imprintedBy: dinoInfo.ImprinterName,
        blueprintPath: `Blueprint'${dinoInfo.BlueprintPath.slice(0, -2)}'`,
        father: undefined,
        mother: undefined,
        updated: now,
      };

      impactedSpecies.add(nodeSafeDinoInfo.blueprintPath);

      for (let index = 0; index < dinoInfo.Stats.length; index++) {
        // Best way to check if it's an unused stat - the max value will always be zero. Shouldn't ever otherwise?
        if (!STAT_INDICES[index] || !dinoInfo.Stats[index].Value) {
          continue;
        }
        //Flatten bc neo doesn't like nested object really anyways
        nodeSafeDinoInfo[`wild${STAT_INDICES[index]}`] =
          dinoInfo.Stats[index].Wild;
        nodeSafeDinoInfo[`mutated${STAT_INDICES[index]}`] =
          dinoInfo.Stats[index].Mutated;
        nodeSafeDinoInfo[`leveled${STAT_INDICES[index]}`] =
          dinoInfo.Stats[index].Tamed;
        nodeSafeDinoInfo[`max${STAT_INDICES[index]}`] =
          dinoInfo.Stats[index].Value;
        nodeSafeDinoInfo[`combinedBase${STAT_INDICES[index]}`] =
          dinoInfo.Stats[index].Wild + dinoInfo.Stats[index].Mutated;
      }

      let father, mother;
      if (dinoInfo.Ancestry) {
        father = `${ownershipId}_${dinoInfo.Ancestry.MaleDinoId1}${dinoInfo.Ancestry.MaleDinoId2}`;
        mother = `${ownershipId}_${dinoInfo.Ancestry.FemaleDinoId1}${dinoInfo.Ancestry.FemaleDinoId2}`;

        nodeSafeDinoInfo.father = father;
        nodeSafeDinoInfo.mother = father;
      }

      let query = `
      MATCH (oi:OwnershipInfo {id: $ownershipId})
      MATCH (:Map)<-[oldMapRel:ON_MAP]-(:Dino { dinoId: $nodeSafeDinoInfo.dinoId })
      DELETE oldMapRel
      MATCH (map:Map {id: $map})
      MERGE (s:Species {blueprintPath: $nodeSafeDinoInfo.blueprintPath}) ON CREATE SET s.label = $fallbackSpecies
      MERGE (map)<-[:ON_MAP]-(dino:Dino { dinoId: $nodeSafeDinoInfo.dinoId })-[:OWNED_BY]->(oi) SET dino = $nodeSafeDinoInfo
      MERGE (map)<-[:ON_MAP]-(statTrack:BestOf {species: s.blueprintPath})-[:OWNED_BY]->(oi)
        SET statTrack += {
          species: s.blueprintPath,
          wildHealth: CASE WHEN coalesce(statTrack.wildHealth, 0) > ${nodeSafeDinoInfo["wildHealth"]} THEN coalesce(statTrack.wildHealth, 0) ELSE ${nodeSafeDinoInfo["wildHealth"]} END,
          mutatedHealth: CASE WHEN coalesce(statTrack.mutatedHealth, 0) > ${nodeSafeDinoInfo["mutatedHealth"]} THEN coalesce(statTrack.mutatedHealth, 0) ELSE ${nodeSafeDinoInfo["mutatedHealth"]} END,
          wildStamina: CASE WHEN coalesce(statTrack.wildStamina, 0) > ${nodeSafeDinoInfo["wildStamina"]} THEN coalesce(statTrack.wildStamina, 0) ELSE ${nodeSafeDinoInfo["wildStamina"]} END,
          mutatedStamina: CASE WHEN coalesce(statTrack.mutatedStamina, 0) > ${nodeSafeDinoInfo["mutatedStamina"]} THEN coalesce(statTrack.mutatedStamina, 0) ELSE ${nodeSafeDinoInfo["mutatedStamina"]} END,
          wildTorpor: CASE WHEN coalesce(statTrack.wildTorpor, 0) > ${nodeSafeDinoInfo["wildTorpor"]} THEN coalesce(statTrack.wildTorpor, 0) ELSE ${nodeSafeDinoInfo["wildTorpor"]} END,
          mutatedTorpor: CASE WHEN coalesce(statTrack.mutatedTorpor, 0) > ${nodeSafeDinoInfo["mutatedTorpor"]} THEN coalesce(statTrack.mutatedTorpor, 0) ELSE ${nodeSafeDinoInfo["mutatedTorpor"]} END,
          wildOxygen: CASE WHEN coalesce(statTrack.wildOxygen, 0) > ${nodeSafeDinoInfo["wildOxygen"]} THEN coalesce(statTrack.wildOxygen, 0) ELSE ${nodeSafeDinoInfo["wildOxygen"]} END,
          mutatedOxygen: CASE WHEN coalesce(statTrack.mutatedOxygen, 0) > ${nodeSafeDinoInfo["mutatedOxygen"]} THEN coalesce(statTrack.mutatedOxygen, 0) ELSE ${nodeSafeDinoInfo["mutatedOxygen"]} END,
          wildFood: CASE WHEN coalesce(statTrack.wildFood, 0) > ${nodeSafeDinoInfo["wildFood"]} THEN coalesce(statTrack.wildFood, 0) ELSE ${nodeSafeDinoInfo["wildFood"]} END,
          mutatedFood: CASE WHEN coalesce(statTrack.mutatedFood, 0) > ${nodeSafeDinoInfo["mutatedFood"]} THEN coalesce(statTrack.mutatedFood, 0) ELSE ${nodeSafeDinoInfo["mutatedFood"]} END,
          wildSpeed: CASE WHEN coalesce(statTrack.wildSpeed, 0) > ${nodeSafeDinoInfo["wildSpeed"]} THEN coalesce(statTrack.wildSpeed, 0) ELSE ${nodeSafeDinoInfo["wildSpeed"]} END,
          mutatedSpeed: CASE WHEN coalesce(statTrack.mutatedSpeed, 0) > ${nodeSafeDinoInfo["mutatedSpeed"]} THEN coalesce(statTrack.mutatedSpeed, 0) ELSE ${nodeSafeDinoInfo["mutatedSpeed"]} END,
          wildWeight: CASE WHEN coalesce(statTrack.wildWeight, 0) > ${nodeSafeDinoInfo["wildWeight"]} THEN coalesce(statTrack.wildWeight, 0) ELSE ${nodeSafeDinoInfo["wildWeight"]} END,
          mutatedWeight: CASE WHEN coalesce(statTrack.mutatedWeight, 0) > ${nodeSafeDinoInfo["mutatedWeight"]} THEN coalesce(statTrack.mutatedWeight, 0) ELSE ${nodeSafeDinoInfo["mutatedWeight"]} END,
          wildMelee: CASE WHEN coalesce(statTrack.wildMelee, 0) > ${nodeSafeDinoInfo["wildMelee"]} THEN coalesce(statTrack.wildMelee, 0) ELSE ${nodeSafeDinoInfo["wildMelee"]} END,
          mutatedMelee: CASE WHEN coalesce(statTrack.mutatedMelee, 0) > ${nodeSafeDinoInfo["mutatedMelee"]} THEN coalesce(statTrack.mutatedMelee, 0) ELSE ${nodeSafeDinoInfo["mutatedMelee"]} END,
          updated: $now
      }
      MERGE (statTrack)-[:MEMBER_OF]->(s)
      MERGE (dino)-[:MEMBER_OF]->(s)`;

      if (dinoInfo.Ancestry) {
        query += `
        WITH dino, statTrack
          MATCH (mother:Dino { dinoId: $mother })-[:OWNED_BY]->(oi)
          MERGE (mother)-[m:MOTHER_OF]->(dino)
        WITH dino, statTrack
          MATCH (father:Dino { dinoId: $father })-[:OWNED_BY]->(oi)
          MERGE (father)-[f:FATHER_OF]->(dino)`;
      }

      query += `
        RETURN "Success"
      `;

      const { records } = await driver.executeQuery(query, {
        map,
        ownershipId,
        nodeSafeDinoInfo,
        father,
        mother,
        fallbackSpecies: species,
        now,
      });

      results.push(UnwrapStandard(records));
    }

    // Clean up parent relationships in case creatures aren't uploaded in family order (I do this a lot...)
    const parentCleanupQuery = `
      UNWIND $impactedSpecies as speciesPath
      MATCH (s:Species {blueprintPath: speciesPath})
      MATCH (oi:OwnershipInfo {id: $ownershipId})<-[:OWNED_BY]-(dino:Dino)-[mo:MEMBER_OF]->(s)
      WITH dino, oi
        MATCH (mother:Dino { dinoId: dino.mother })-[:OWNED_BY]->(oi)
        MERGE (mother)-[m:MOTHER_OF]->(dino)
      WITH dino, oi
        MATCH (father:Dino { dinoId: dino.father })-[:OWNED_BY]->(oi)
        MERGE (father)-[f:FATHER_OF]->(dino)
      RETURN "Success"
    `;
    await driver.executeQuery(parentCleanupQuery, {
      ownershipId,
      impactedSpecies: Array.from(impactedSpecies),
    });

    console.log(`[${Date.now()}]: Updated ${allDinoInfo.length} creatures`);
    driver.close();
    return NextResponse.json(
      { message: `Successfully updated ${results.length} creatures!` },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err?.message ?? "Unknown",
        message: "Unable to upload dino(s)!",
      },
      { status: 500 }
    );
  }
}
