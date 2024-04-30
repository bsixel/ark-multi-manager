import { DINO_COLORS } from "@/lib/utils/ColorMappings";
import { Chip, Tooltip } from "@mui/material";
import { useMemo } from "react";

export const getTextColor = (color: number) => {
  const dinoColor = DINO_COLORS[color]?.color;
  if (!dinoColor) {
    return "#000";
  }

  const c = dinoColor.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 85) {
    return "#FFF";
  }
  return "#000";
};

export default function ColorChip({
  color,
  index,
  showNumber,
  mini,
  hexTooltip,
}: {
  color: number;
  index?: number;
  showNumber?: boolean;
  mini?: boolean;
  copyable?: boolean;
  hexTooltip?: boolean;
}) {
  const colorLabel = useMemo(() => {
    if (mini) return "";
    if (!color) return "N/A";
    let label = "";
    if (showNumber) {
      label += `${color}`;
      if (index != undefined) {
        label = `${index}:${label}`;
      }
    }
    return label;
  }, [color, index, showNumber, mini]);

  const tooltipLabel = useMemo(() => {
    if (!color) return "Unused region";
    let label = hexTooltip
      ? DINO_COLORS[color]?.color
      : DINO_COLORS[color]?.name;
    if (!label) {
      // Unmapped/maybe new color
      return "Unknown";
    } else if (!showNumber) {
      label = `${color}: ${label}`;
    }
    return label;
  }, [color, hexTooltip, showNumber]);

  const backgroundColor = useMemo(() => {
    if (!color) return undefined; // Unused region
    const starterColor = DINO_COLORS[color]?.color;
    if (!starterColor) return "red";
    return starterColor;
  }, [color]);

  return (
    <Tooltip title={tooltipLabel} placement="right-start">
      {colorLabel && colorLabel != "N/A" ? (
        <Chip
          label={colorLabel}
          variant="outlined"
          sx={{
            backgroundColor: DINO_COLORS[color]?.color,
            color: getTextColor(color) ?? "#000",
            fontSize: 15,
          }}
        />
      ) : (
        <div
          style={{
            borderRadius: 9001,
            borderWidth: "1px",
            height: mini ? "1rem" : "32px",
            width: mini ? "1rem" : "32px",
            backgroundColor: backgroundColor,
            borderColor: backgroundColor || "#8fc8d9",
            color: "#8fc8d9",
            fontSize: 14,
            content: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px",
          }}
        >
          {colorLabel}
        </div>
      )}
    </Tooltip>
  );
}
