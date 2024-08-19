import { createSession, UnwrapStandard } from "@/lib/utils/ApiHelper";
import { NextResponse } from "next/server";
// Run through https://jsonformatter.curiousconcept.com/# if we want quoted properties which apparently some places complain about
export const arkMappings = [
  {
    name: "The Island",
    id: "TheIsland_WP",
    order: 0,
  },
  {
    name: "Scorched Earth",
    id: "ScorchedEarth_WP",
    order: 1,
  },
  {
    name: "The Center",
    id: "thecenter_wp",
    order: 2,
  },
];

export async function GET() {
  try {
    const { driver } = createSession();

    const { records } = await driver.executeQuery(`MATCH (m:Map) RETURN m`);

    driver.close();
    return NextResponse.json(UnwrapStandard(records), { status: 201 });
  } catch (err) {
    return NextResponse.json(
      {
        error: err?.message ?? "Unknown",
        message: "Unable to fetch maps!",
      },
      { status: 500 }
    );
  }
}
