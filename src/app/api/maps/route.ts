import { UnwrapStandard, createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { driver } = createSession();

    // Fetch best of each species stats
    const { records: mapRecords } = await driver.executeQuery(
      `
      MATCH (map:Map) RETURN map`
    );

    driver.close();
    return NextResponse.json(
      {
        maps: UnwrapStandard(mapRecords),
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
        message: `Unable to fetch map data!`,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { name, id } = await req.json();

  try {
    const { driver } = createSession();

    const query = `
        MATCH (existingMaps:Map)
        WITH max(existingMaps.order) as highestOrder
        MERGE (newMap:Map {id: $id}) SET newMap += {name: $name, order: highestOrder+1}
        RETURN newMap`;

    const { records } = await driver.executeQuery(query, {
      name,
      id,
    });

    console.log(`[${Date.now()}]: Updated ${records.length} maps`);
    driver.close();
    return NextResponse.json(
      { message: `Successfully updated ${records.length} maps!` },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err?.message ?? "Unknown",
        message: "Unable to update maps!",
      },
      { status: 500 }
    );
  }
}
