import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { ownershipId: string } }
) {
  if (!params.ownershipId || params.ownershipId == "undefined") {
    return NextResponse.json(
      {
        species: [],
        bestStats: [],
        maps: [],
      },
      { status: 201 }
    );
  }
  try {
    const { driver } = createSession();

    // Fetch best of each species stats
    const { records: bestOfRecords } = await driver.executeQuery(
      `
      MATCH (map:Map)
      MATCH (oi:OwnershipInfo {id: $ownershipId})
      OPTIONAL MATCH (map)<-[:ON_MAP]-(bests:BestOf)-[:OWNED_BY]->(oi)
      OPTIONAL MATCH (bests)-[:MEMBER_OF]->(s:Species)
      WITH bests{.*, map: map.id, species: s.blueprintPath } as bestOfMap
      RETURN collect(bestOfMap) as bests`,
      { ownershipId: params.ownershipId }
    );

    const bestStats = {};
    bestOfRecords[0]["_fields"][0].forEach((bestOfNode) => {
      // Safe to use just .species since :BestOf uses blueprint on the node
      const nodeSpecies = bestOfNode.species;
      const nodeMap = bestOfNode.map;
      if (!bestStats[nodeSpecies]) {
        bestStats[nodeSpecies] = {
          allMaps: {},
        };
      }
      if (!bestStats[nodeSpecies][nodeMap]) {
        bestStats[nodeSpecies][nodeMap] = {};
      }
      Object.entries(bestOfNode).forEach(([field, value]) => {
        if (field == "map" || field == "species") return;
        const statValue = parseInt(value as string);
        bestStats[nodeSpecies][nodeMap][field] = statValue;
        if (bestStats[nodeSpecies].allMaps[field] == undefined) {
          bestStats[nodeSpecies].allMaps[field] = statValue;
        } else {
          bestStats[nodeSpecies].allMaps[field] = Math.max(
            statValue,
            bestStats[nodeSpecies].allMaps[field]
          );
        }
      });
    });

    // Fetch species
    const { records: speciesRecords } = await driver.executeQuery(
      `
        MATCH (s:Species) RETURN s ORDER BY s.label
      `,
      { ownershipId: params.ownershipId }
    );

    // Fetch maps
    const { records: mapRecords } = await driver.executeQuery(
      `
        MATCH (m:Map) RETURN m ORDER BY m.order ASC
      `,
      { ownershipId: params.ownershipId }
    );

    driver.close();
    return NextResponse.json(
      {
        species: UnwrapStandard(speciesRecords).map((s) => ({
          ...s,
          label: s.label.replace("_", " "),
        })),
        bestStats,
        maps: UnwrapStandard(mapRecords),
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
        message: `Unable to fetch metadata for tracking cluster! ${params.ownershipId}`,
      },
      { status: 500 }
    );
  }
}
