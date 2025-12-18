import { BestOf } from "../utils/constants";

export type OwnershipInfo = {
  name?: string;
  id?: string;
  new?: boolean;
};

export type ArkMap = {
  name: string;
  id: string;
  order: number;
};

export type Species = {
  blueprintPath: string; // Basically the unique ID
  primalName: string;
  label: string;
  genus: Genus;
};

export type Genus = {
  blueprintPath: string;
  primalName: string;
  label: string;
};

export type MetadataDefinition = {
  bestStats: BestOf[];
  species: Species[];
  maps: ArkMap[];
};

export type Item = {
  label: string;
  primalName: string;
  blueprintPath: string;
};
