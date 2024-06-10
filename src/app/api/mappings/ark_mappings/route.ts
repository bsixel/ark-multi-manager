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
  return NextResponse.json(arkMappings, { status: 201 });
}
