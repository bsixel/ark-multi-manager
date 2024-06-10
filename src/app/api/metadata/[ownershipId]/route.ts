import { createSession } from "@/lib/utils/ApiHelper";
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

    // Fetch stuff like the kinds of tamed critters we've seen etc
    const { records } = await driver.executeQuery(
      `
      MATCH (map:Map)
      MATCH (oi:OwnershipInfo {id: $ownershipId})
      OPTIONAL MATCH (map)<-[:ON_MAP]-(bests:BestOf)-[:OWNED_BY]->(oi)
      WITH bests{.*, map: map.name } as bestOfMap, map.name as maps ORDER BY map.order ASC
      RETURN collect(bestOfMap) as bests, collect(distinct maps) as maps`,
      { ownershipId: params.ownershipId }
    );

    const species = new Set<string>();
    const maps = records[0]["_fields"][1];
    const bestStats = {};
    records[0]["_fields"][0].forEach((bestOfNode) => {
      const nodeSpecies = bestOfNode.species;
      const nodeMap = bestOfNode.map;
      species.add(nodeSpecies);
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

    driver.close();
    return NextResponse.json(
      {
        species: Array.from(species).sort(),
        bestStats,
        maps,
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
