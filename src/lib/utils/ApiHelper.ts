import neo4j from "neo4j-driver";

export const UnwrapStandard = (records) => {
  // Done this way because it seems to avoid TS private fields etc and just return the data
  return records.map((r) => r["_fields"][0]["properties"]);
};

export const createSession = () => {
  if (!process.env.NEO4J_URI) throw new Error("NEO4J_URI not set");
  if (!process.env.NEO4J_USER) throw new Error("NEO4J_USERNAME not set");
  if (!process.env.NEO4J_PASS) throw new Error("NEO4J_PASSWORD not set");

  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
  );
  const session = driver.session();
  return { driver, session };
};

export const DEFAULT_GET_OPTIONS: RequestInit = {
  method: "GET",
  mode: "cors",
  cache: "no-cache" as RequestCache,
  credentials: "include",
};

export const DEFAULT_POST_OPTIONS: RequestInit = {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};
