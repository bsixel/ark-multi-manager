/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({ path: "../.env.local" });

import neo4j from "neo4j-driver";
import { resourceMappings } from "../src/app/api/mappings/resource_mappings/route";
import { UnwrapStandard } from "../src/lib/utils/ApiHelper";
import { creatureMappings } from "../src/app/api/mappings/species/route";
import { arkMappings } from "@/app/api/mappings/ark_mappings/route";

if (!process.env.NEO4J_URI) throw new Error("NEO4J_URI not set");
if (!process.env.NEO4J_USER) throw new Error("NEO4J_USERNAME not set");
if (!process.env.NEO4J_PASS) throw new Error("NEO4J_PASSWORD not set");

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
);

try {
  const updateMapsQuery = `
  UNWIND $maps AS row
  MERGE (m:Map { id: row.id}) SET m += {
    name: row.name,
    order: row.order
  }
  RETURN m
`;

  driver
    .executeQuery(updateMapsQuery, {
      maps: arkMappings,
    })
    .then(({ records: arkRecords }) => {
      console.log("Updated map list: ", UnwrapStandard(arkRecords).length);
    })
    .catch((e) => {
      console.error("Error updating map list!");
    });

  const updateResourcesQuery = `
  UNWIND $resources AS row
  MERGE (e:Resource { blueprintPath: row.blueprintPath}) SET e += {
    primalName: row.primalName,
    label: row.label
  }
  RETURN e
`;

  driver
    .executeQuery(updateResourcesQuery, {
      resources: resourceMappings,
    })
    .then(({ records: resourceRecords }) => {
      console.log(
        "Updated engram records: ",
        UnwrapStandard(resourceRecords).length
      );
    })
    .catch((e) => {
      console.error("Error updating engram list!");
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
    })
    .catch((e) => {
      console.error("Error updating species list!");
    });
} catch (e) {
  console.error("Error attempting to update default data!");
} finally {
  process.on("exit", async () => {
    await driver.close();
  });
  process.on("SIGINT", async () => {
    await driver.close();
  });
}
