import { Creature } from "@/lib/types/Creature";
import { Chip } from "@mui/material";
import { BestOf } from "@/lib/utils/constants";
import { useContext } from "react";
import { HomeContext } from "@/app/home/page";
import { FilterAlt } from "@mui/icons-material";

export default function StatChip({
  isSummary,
  canFilter,
  stat,
  creature,
}: {
  isSummary?: boolean;
  canFilter?: boolean;
  stat: string;
  creature: Creature | BestOf;
}) {
  const { setStatFilters, statFilters } = useContext(HomeContext);
  const prefixes = ["wild", "mutated"];

  if (!isSummary) {
    prefixes.push("leveled");
  }

  const skippedFields = ["Torpor", "Speed"];

  return !skippedFields.includes(stat) ? (
    <Chip
      key={`stat_${stat}`}
      className="w-fit"
      label={`${stat}: ${prefixes.map((p) => creature?.[`${p}${stat}`] || 0).join(" | ")}`}
      icon={statFilters[creature.species]?.[stat] ? <FilterAlt /> : null}
      sx={{
        backgroundColor:
          isSummary || creature[`hasBestWild${stat}`] ? "#6ca379" : "#1A2027",
      }}
      onClick={() => {
        if (!canFilter) return;
        const newStatFilters = { ...statFilters };

        if (newStatFilters[creature.species]?.[stat]) {
          newStatFilters[creature.species][stat] = undefined;
        } else {
          newStatFilters[creature.species][stat] = creature[`wild${stat}`];
        }
        setStatFilters(newStatFilters);
      }}
    />
  ) : null;
}
