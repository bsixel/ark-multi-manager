import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function POST(req) {
  const userDinoInfo = await req.json();

  try {
    const { driver } = createSession();

    const { ownershipId, dinoId, isDead } = userDinoInfo;

    const { records } = await driver.executeQuery(
      `MATCH (oi:OwnershipInfo {id: $ownershipId})
       MATCH (d:Dino {dinoId: $dinoId})-[:OWNED_BY]->(oi)
        SET d.isDead = $isDead RETURN d`,
      {
        ownershipId,
        dinoId,
        isDead,
      }
    );

    const unwrapped = UnwrapStandard(records);

    console.log(
      `[${Date.now()}]: Updated dead status for creature ${dinoId} to ${unwrapped[0].isDead}`
    );
    driver.close();
    return NextResponse.json(unwrapped[0], { status: 201 });
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
