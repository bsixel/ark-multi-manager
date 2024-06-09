/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({ path: "../.env.local" });

import neo4j from "neo4j-driver";
import { resourceMappings } from "../src/app/api/mappings/resource_mappings/route";
import { UnwrapStandard } from "../src/lib/utils/ApiHelper";
import { creatureMappings } from "../src/app/api/mappings/species_mappings/route";

if (!process.env.NEO4J_URI) throw new Error("NEO4J_URI not set");
if (!process.env.NEO4J_USER) throw new Error("NEO4J_USERNAME not set");
if (!process.env.NEO4J_PASS) throw new Error("NEO4J_PASSWORD not set");

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
);

const updateEngramsQuery = `
  UNWIND $engrams AS row
  MERGE (e:Engram { blueprintPath: row.blueprintPath}) SET e += {
    primalName: row.primalName,
    label: row.label
  }
  RETURN e
`;

driver
  .executeQuery(updateEngramsQuery, {
    engrams: resourceMappings,
  })
  .then(({ records: engramRecords }) => {
    console.log(
      "Updated engram records: ",
      UnwrapStandard(engramRecords).length
    );
  });

const updateSpeciesDefinitionsQuery = `
  UNWIND $creatureMappings AS row
  MERGE (s:Species { blueprintPath: row.blueprintPath}) SET s += {
    primalName: row.primalName,
    label: row.label
  }
  RETURN s
`;

driver
  .executeQuery(updateSpeciesDefinitionsQuery, {
    creatureMappings,
  })
  .then(({ records: speciesDefinitions }) => {
    const usefulResult = UnwrapStandard(speciesDefinitions);
    console.log("Updated species definition records: ", usefulResult.length);
  });

process.on("exit", async () => {
  await driver.close();
});
process.on("SIGINT", async () => {
  await driver.close();
});
