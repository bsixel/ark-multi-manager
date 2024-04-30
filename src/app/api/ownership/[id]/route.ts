import { createSession } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const { driver } = createSession();
    // Fetch stuff like the kinds of tamed critters we've seen etc
    const { records } = await driver.executeQuery(
      `
       MATCH (oi:OwnershipInfo {id: $id}) RETURN oi{.*}`,
      { id }
    );

    driver.close();
    return NextResponse.json(records[0]["_fields"][0] || null, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err, message: `Unable to fetch ownership info for ID ${id}` },
      { status: 500 }
    );
  }
}
