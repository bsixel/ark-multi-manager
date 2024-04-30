export function CLEAN_SPECIES(sp) {
  return sp.trim().replace("_", " ");
}

export function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const LOCAL_PREFIX = "AMM_";

export const STAT_INDICES = {
  0: "Health",
  1: "Stamina",
  2: "Torpor",
  3: "Oxygen",
  4: "Food",
  5: "Speed",
  7: "Weight",
  8: "Melee",
};

export type STAT_NAMES =
  | "health"
  | "stamina"
  | "torpor"
  | "oxygen"
  | "food"
  | "speed"
  | "weight"
  | "melee";

export type STAT_NAME_VARIANTS =
  | "wildHealth"
  | "mutatedHealth"
  | "leveledHealth"
  | "wildStamina"
  | "mutatedStamina"
  | "leveledStamina"
  | "wildTorpor"
  | "mutatedTorpor"
  | "leveledTorpor"
  | "wildOxygen"
  | "mutatedOxygen"
  | "leveledOxygen"
  | "wildFood"
  | "mutatedFood"
  | "leveledFood"
  | "wildSpeed"
  | "mutatedSpeed"
  | "leveledSpeed"
  | "wildWeight"
  | "mutatedWeight"
  | "leveledWeight"
  | "wildMelee"
  | "mutatedMelee"
  | "leveledMelee";

export type BestOf = {
  species?: string;
  wildHealth: number;
  mutatedHealth: number;
  wildStamina: number;
  mutatedStamina: number;
  wildTorpor: number;
  mutatedTorpor: number;
  wildOxygen: number;
  mutatedOxygen: number;
  wildFood: number;
  mutatedFood: number;
  wildSpeed: number;
  mutatedSpeed: number;
  wildWeight: number;
  mutatedWeight: number;
  wildMelee: number;
  mutatedMelee: number;
};

export const defaultBestOf = (species): BestOf => ({
  species: species,
  wildHealth: 0,
  mutatedHealth: 0,
  wildStamina: 0,
  mutatedStamina: 0,
  wildTorpor: 0,
  mutatedTorpor: 0,
  wildOxygen: 0,
  mutatedOxygen: 0,
  wildFood: 0,
  mutatedFood: 0,
  wildSpeed: 0,
  mutatedSpeed: 0,
  wildWeight: 0,
  mutatedWeight: 0,
  wildMelee: 0,
  mutatedMelee: 0,
});
