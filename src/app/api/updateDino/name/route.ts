import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function POST(req) {
  const userDinoInfo = await req.json();

  try {
    const { driver } = createSession();

    const now = Date.now();

    const { ownershipId, dinoId, newName } = userDinoInfo;

    const { records } = await driver.executeQuery(
      `
       MATCH (d:Dino {dinoId: $dinoId})-[:OWNED_BY]->(oi:OwnershipInfo {id: $ownershipId}) SET d.name = $newName, d.updated = $now
       MERGE (d)-[:OWNED_BY]->(oi)
       RETURN d`,
      {
        ownershipId,
        dinoId,
        newName,
        now,
      }
    );

    console.log(
      `[${Date.now()}]: Updated name for creature ${dinoId} to ${newName}`
    );
    driver.close();
    return NextResponse.json(UnwrapStandard(records), { status: 201 });
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
