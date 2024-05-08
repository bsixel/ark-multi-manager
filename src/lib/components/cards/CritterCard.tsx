import { HomeContext, SomeMaxStar } from "@/app/home/page";
import useToggle from "@/lib/hooks/useToggle";
import { Creature } from "@/lib/types/Creature";
import { CLEAN_SPECIES, STAT_INDICES } from "@/lib/utils/constants";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useContext } from "react";
import { DEFAULT_POST_OPTIONS } from "@/lib/utils/ApiHelper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StatChip from "../display/StatChip";
import { Female, HeartBroken, Male, LocalHospital } from "@mui/icons-material";
import { GlobalContext } from "../layout/appBarLayout";
import ColorChip from "../display/ColorChip";
import { OwnershipInfo } from "@/lib/types/global";

export const genderedIcon = (creature: Creature) => {
  return creature.gender == "fem" ? (
    <Female color="secondary" />
  ) : (
    <Male color="info" />
  );
};

export const lifeStatusIcon = (
  creature: Creature,
  ownershipInfo?: OwnershipInfo,
  loadCreatures?: () => void
) => (
  <Tooltip
    placement="right-start"
    title={creature.isDead ? "Mark not dead" : "Mark dead"}
    sx={{
      cursor: loadCreatures ? "pointer" : null,
    }}
    onClick={
      loadCreatures
        ? async () => {
            const resp = await fetch("/api/updateDino/dead", {
              ...DEFAULT_POST_OPTIONS,
              body: JSON.stringify({
                ownershipId: ownershipInfo.id,
                dinoId: creature.dinoId,
                isDead: !creature.isDead,
              }),
            });
            const newCreatureResp = await resp.json();
            console.log(`Updated ${creature.dinoId} to`, newCreatureResp);

            loadCreatures();
          }
        : () => {}
    }
  >
    {creature.isDead ? (
      <HeartBroken color="error" />
    ) : (
      <LocalHospital color="success" />
    )}
  </Tooltip>
);

const getCardShadow = (creature: Creature) => {
  if (creature.bestOfParents) {
    return "10px 5px 5px #6ca379";
  } else if (creature.uselessChild) {
    return "10px 5px 5px #854a57";
  } else return null;
};

export default function CritterCard({
  creature,
  compact = false,
  backgroundColor = "#233058",
  useInfoShadows = false,
}: {
  creature: Creature;
  compact?: boolean;
  useInfoShadows?: boolean;
  backgroundColor?: string;
}) {
  const { ownershipInfo } = useContext(GlobalContext);
  const { selectedCreatures, setSelectedCreatures, loadCreatures } =
    useContext(HomeContext);

  const { value: showStats, toggle: toggleShowStats } = useToggle(false);

  return creature ? (
    <Card
      sx={{
        width: 380,
        backgroundColor,
        boxShadow: useInfoShadows ? getCardShadow(creature) : null,
      }}
    >
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`${CLEAN_SPECIES(creature.species)} `}
            {genderedIcon(creature)}
          </Typography>
          <div>
            {creature.hasBestOfSomeStat ? SomeMaxStar : null}
            {creature.favorite ? <FavoriteIcon color="warning" /> : null}
            {lifeStatusIcon(creature, ownershipInfo, loadCreatures)}
          </div>
        </Stack>
        <Typography variant="h5" component="div" color="text.secondary">
          {creature.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Base Level {creature.baseLevel}
        </Typography>
        {creature.imprintedBy ? (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Imprinted by {creature.imprintedBy}
          </Typography>
        ) : null}
        <Box sx={{ mb: 1.5 }} color="text.secondary">
          Colors:
          <Stack spacing={0.5} direction={"row"}>
            {creature.colors.map((color, idx) => (
              <ColorChip
                key={`color-chip-${idx}-${color}`}
                color={color}
                index={idx}
              />
            ))}
          </Stack>
        </Box>
        {showStats ? (
          <React.Fragment>
            <Divider />
            <Stack paddingTop={2}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Stats
              </Typography>
              <Grid container spacing={2} columns={3}>
                {Object.values(STAT_INDICES).map((stat) => (
                  <Grid key={`${creature.dinoId}_${stat}`}>
                    <StatChip creature={creature} stat={stat} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </React.Fragment>
        ) : null}
      </CardContent>
      <CardActions>
        {!compact ? (
          <Button
            variant="contained"
            component="span"
            size="small"
            onClick={() => toggleShowStats()}
          >
            {showStats ? "Hide Stats" : "Show Stats"}
          </Button>
        ) : null}
        <Button
          variant="contained"
          component="span"
          size="small"
          onClick={() => {
            const selectedCreaturesIdx = selectedCreatures.indexOf(
              creature.dinoId
            );
            if (selectedCreaturesIdx != -1) {
              // Found already there, remove
              setSelectedCreatures(
                selectedCreatures.filter((c) => c !== creature.dinoId)
              );
            } else {
              // Add to tracking
              setSelectedCreatures([...selectedCreatures, creature.dinoId]);
            }
          }}
        >
          {selectedCreatures.includes(creature.dinoId)
            ? "Stop Tracking"
            : "Start Tracking"}
        </Button>
        <Button
          variant="contained"
          component="span"
          size="small"
          onClick={async () => {
            const resp = await fetch("/api/updateDino/favorite", {
              ...DEFAULT_POST_OPTIONS,
              body: JSON.stringify({
                ownershipId: ownershipInfo.id,
                dinoId: creature.dinoId,
                shouldFavorite: !creature.favorite,
              }),
            });
            const newCreatureResp = await resp.json();
            console.log(`Updated ${creature.dinoId} to`, newCreatureResp);

            loadCreatures();
          }}
        >
          {creature.favorite ? "Unfavorite" : "Favorite"}
        </Button>
      </CardActions>
    </Card>
  ) : null;
}
