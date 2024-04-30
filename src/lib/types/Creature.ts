export type NeoCreatureRelation = {
  id: string;
  source: string;
  target: string;
  relationship: PARENT_RELATION;
  label?: string;
};

export type PARENT_RELATION = "FATHER_OF" | "MOTHER_OF";

export interface Creature {
  favorite: boolean;
  dinoId: string;
  species: string | undefined;
  map: string | undefined;
  gender: string | undefined;
  neutered: boolean;
  colors: number[];
  maternalMutations: number;
  paternalMutations: number;
  baseLevel: number;
  name: string | undefined;
  tribeName: string | undefined;
  imprintedBy: string | undefined;
  mother: string | undefined;
  father: string | undefined;
  bestOfParents: boolean;
  uselessChild: boolean;
  wildHealth: number;
  mutatedHealth: number;
  combinedBaseHealth: number;
  leveledHealth: number;
  maxHealth: number;
  wildStamina: number;
  mutatedStamina: number;
  combinedBaseStamina: number;
  leveledStamina: number;
  maxStamina: number;
  wildTorpor: number;
  mutatedTorpor: number;
  combinedBaseTorpor: number;
  leveledTorpor: number;
  maxTorpor: number;
  wildOxygen: number;
  mutatedOxygen: number;
  combinedBaseOxygen: number;
  leveledOxygen: number;
  maxOxygen: number;
  wildFood: number;
  mutatedFood: number;
  combinedBaseFood: number;
  leveledFood: number;
  maxFood: number;
  wildSpeed: number;
  mutatedSpeed: number;
  combinedBaseSpeed: number;
  leveledSpeed: number;
  maxSpeed: number;
  wildWeight: number;
  mutatedWeight: number;
  combinedBaseWeight: number;
  leveledWeight: number;
  maxWeight: number;
  wildMelee: number;
  mutatedMelee: number;
  combinedBaseMelee: number;
  leveledMelee: number;
  maxMelee: number;
  hasBestHealth: boolean;
  hasBestStamina: boolean;
  hasBestOxygen: boolean;
  hasBestFood: boolean;
  hasBestSpeed: boolean;
  hasBestWeight: boolean;
  hasBestMelee: boolean;
  hasBestOfSomeStat: boolean;
}

export type SpeciesColorsMap = {
  [species: string]: number[][];
};

export type UniqueSpeciesColorsMap = {
  [species: string]: Set<number>[];
};
