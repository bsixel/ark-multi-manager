import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function POST(req) {
  const userOwnershipInfoInfo = await req.json();

  try {
    const { driver } = createSession();

    const { name } = userOwnershipInfoInfo;

    const { records } = await driver.executeQuery(
      `MERGE (owner:OwnershipInfo {name: $name, id: apoc.create.uuid()}) RETURN owner`,
      {
        name,
      }
    );

    const unwrapped = UnwrapStandard(records);

    console.log(
      `[${Date.now()}]: Added new tracking set ${name} with ID ${unwrapped[0]?.id}`
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
