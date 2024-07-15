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
  justLabel,
}: {
  isSummary?: boolean;
  canFilter?: boolean;
  stat: string;
  creature: Creature | BestOf;
  justLabel?: boolean;
}) {
  const { setStatFilters, statFilters, hasBest } = useContext(HomeContext);
  const prefixes = ["wild", "mutated"];

  if (!isSummary) {
    prefixes.push("leveled");
  }

  const numberElement = (type) =>
    type !== "leveled" && hasBest(creature as Creature, type, stat) ? (
      <i>
        <strong> {creature[`${type}${stat}`]} </strong>
      </i>
    ) : (
      creature[`${type}${stat}`]
    );

  const skippedFields = ["Torpor", "Speed"];
  const label = (
    <div className="pl-2">
      {numberElement("wild")} | {numberElement("mutated")}
      {!isSummary ? "| " : null}
      {numberElement("leveled")}
    </div>
  );
  if (justLabel) {
    return label;
  } else if (!skippedFields.includes(stat)) {
    return (
      <Chip
        key={`stat_${stat}`}
        className="w-fit"
        label={
          <label className="flex flex-row">
            {stat}: {label}
          </label>
        }
        icon={statFilters[creature.species]?.[stat] ? <FilterAlt /> : null}
        sx={{
          backgroundColor:
            isSummary || hasBest(creature as Creature, "wild", stat)
              ? "#6ca379"
              : "#1A2027",
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
    );
  } else {
    return null;
  }
}
