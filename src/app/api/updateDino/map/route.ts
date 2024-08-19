import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function POST(req) {
  const userDinoInfo = await req.json();

  const { ownershipId, dinoId, newMap } = userDinoInfo;

  try {
    const { driver } = createSession();

    const now = Date.now();

    const { records } = await driver.executeQuery(
      `MATCH (newMap:Map {id: $newMapId})
       MATCH (d:Dino {dinoId: $dinoId})-[:OWNED_BY]->(:OwnershipInfo {id: $ownershipId}) SET d.updated = $now
       WITH d, newMap
       MATCH (d)-[oldOnMap:ON_MAP]->(:Map)
       DELETE oldOnMap
       MERGE (d)-[:ON_MAP]->(newMap)
       RETURN newMap`,
      {
        ownershipId,
        dinoId,
        newMapId: newMap,
        now,
      }
    );

    console.log(
      `[${Date.now()}]: Updated map for creature ${dinoId} to ${newMap}`
    );
    driver.close();
    return NextResponse.json(UnwrapStandard(records), { status: 201 });
  } catch (err) {
    return NextResponse.json(
      {
        error: err?.message ?? "Unknown",
        message: `Unable to update map for dino ${dinoId} to ${newMap}!`,
      },
      { status: 500 }
    );
  }
}
