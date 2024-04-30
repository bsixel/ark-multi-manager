import { createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { ownershipId: string } }
) {
  try {
    const { driver } = createSession();

    // Fetch stuff like the kinds of tamed critters we've seen etc
    const { records } = await driver.executeQuery(
      `
      MATCH (m:Map)
      MATCH (oi:OwnershipInfo {id: "ee6a9b6a-b915-4276-ad4e-ed529f44adc2"})
      MATCH (mapBest:Map)<-[:ON_MAP]-(bests:BestOf)-[:OWNED_BY]->(oi)
      WITH m, bests{.*, map: mapBest.name} AS mappedBests
      RETURN collect(mappedBests) as bestStats, collect(distinct m.name) as maps`,
      { ownershipId: params.ownershipId }
    );

    const species = new Set<string>();
    const bestStats = {};
    records[0]["_fields"][0].forEach((bestOfNode) => {
      const nodeSpecies = bestOfNode.species;
      species.add(nodeSpecies);
      bestStats[nodeSpecies] = {};
      Object.entries(bestOfNode).forEach(([stat, value]) => {
        bestStats[nodeSpecies][stat] = parseInt(value as string);
      });
      bestStats[nodeSpecies].species = nodeSpecies;
    });

    driver.close();
    return NextResponse.json(
      {
        species: Array.from(species).sort(),
        bestStats,
        maps: records[0]["_fields"][1],
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
