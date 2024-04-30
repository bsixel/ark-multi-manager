// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Card, Divider } from "@mui/material";
import { memo } from "react";
import { Handle, Position } from "reactflow";
import { Creature } from "@/lib/types/Creature";
import CritterCard from "../../cards/CritterCard";

function GeneNode({
  data,
}: {
  data: {
    creature: Creature;
  };
}) {
  return (
    <>
      <CritterCard creature={data.creature} compact useInfoShadows />
      <Handle type="target" position={Position.Top} />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          opacity: 0,
        }}
      />
    </>
  );
}

export default memo(GeneNode);
