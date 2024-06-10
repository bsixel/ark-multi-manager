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
};
