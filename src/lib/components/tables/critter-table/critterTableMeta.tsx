import { Creature } from "@/lib/types/Creature";
import { GridColDef } from "@mui/x-data-grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { genderedIcon, lifeStatusIcon } from "../../cards/CritterCard";
import ColorChip from "../../display/ColorChip";
import { Stack } from "@mui/material";
import { ArkMap } from "@/lib/types/global";
import { STAT_INDICES } from "@/lib/utils/constants";
import StatChip from "../../display/StatChip";

export type LimitedCreature = Omit<Creature, "tribeName">;

export const critterColumns = (
  availableMaps: ArkMap[]
): GridColDef<Creature>[] => {
  const originalCols: GridColDef<Creature>[] = [
    {
      field: "name",
      editable: true,
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        const creature = params.row;
        return (
          <div>
            {creature.name} {genderedIcon(creature)}{" "}
            {creature.isDead ? lifeStatusIcon(creature) : null}
            {creature.favorite ? <FavoriteIcon color="warning" /> : null}
          </div>
        );
      },
    },
    {
      field: "baseLevel",
      type: "number",
      headerName: "Base Level",
      width: 100,
    },
    {
      field: "dinoId",
      headerName: "Dino ID",
      width: 100,
    },
    {
      field: "species",
      headerName: "Species",
      width: 150,
      valueFormatter: (_unused, row) => row.speciesLabel,
    },
    {
      field: "map",
      headerName: "Map",
      width: 150,
      editable: availableMaps?.length > 0,
      type: "singleSelect",
      valueOptions: availableMaps,
      valueFormatter: (_unused, row) =>
        availableMaps.find((m) => m.id == row.map)?.name || row.map,
      valueSetter: (value, row) => {
        return { ...row, map: value };
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
    },
    {
      field: "neutered",
      headerName: "Neutered",
      width: 100,
    },
    {
      field: "maternalMutations",
      type: "number",
      headerName: "Mutations (f)",
      width: 100,
    },
    {
      field: "paternalMutations",
      type: "number",
      headerName: "Mutations (m)",
      width: 100,
    },
    {
      field: "colors",
      headerName: "Colors",
      width: 120,
      valueGetter: (v, creature) => creature.colors.join(" | "),
      renderCell: ({ row: creature }) => {
        return (
          <Stack
            paddingTop={2}
            className="justify-right"
            spacing={0.25}
            direction="row"
          >
            {creature.colors.map((color, idx) => {
              return (
                <ColorChip
                  key={`color-chip-${idx}-${color}`}
                  mini
                  color={color}
                />
              );
            })}
          </Stack>
        );
      },
    },
    {
      field: "imprintedBy",
      headerName: "Imprinted By",
      width: 100,
    },
  ];

  Object.values(STAT_INDICES).forEach((stat) => {
    originalCols.push(
      {
        field: `overall${stat}`,
        editable: false,
        headerName: stat,
        width: 120,
        valueGetter: (v, row) => row[`combinedBase${stat}`],
        renderCell: (params) => (
          <StatChip stat={stat} creature={params.row} justLabel />
        ),
      },
      {
        field: `wild${stat}`,
        type: "number",
        headerName: `Wild ${stat}`,
        width: 100,
      },
      {
        field: `mutated${stat}`,
        type: "number",
        headerName: `Mutated ${stat}`,
        width: 100,
      },
      {
        field: `leveled${stat}`,
        type: "number",
        headerName: `Leveled ${stat}`,
        width: 100,
      },
      {
        field: `max${stat}`,
        type: "number",
        headerName: `Max ${stat}`,
        width: 100,
      }
    );
  });

  return originalCols;
};

export const defaultHiddenCritterCols = () => {
  const filtered = critterColumns([]).filter(
    (c) =>
      c.field.startsWith("wild") ||
      c.field.startsWith("leveled") ||
      c.field.startsWith("max") ||
      c.field.startsWith("mutated") ||
      c.field.includes("Torpor") ||
      c.field.includes("Speed") ||
      c.field.includes("neutered") ||
      ["dinoId", "maternalMutations", "paternalMutations", "gender"].includes(
        c.field
      )
  );
  return Object.fromEntries(filtered.map((c) => [c.field, false]));
};
