"use client";
import { Info } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useContext, useState } from "react";
import { DEFAULT_POST_OPTIONS } from "@/lib/utils/ApiHelper";
import { GlobalContext } from "@/lib/components/layout/appBarLayout";

export default function LandingPage() {
  const { setGlobalOwnershipId } = useContext(GlobalContext);

  const [updateError, setUpdateError] = useState<string>("");
  const [ownershipId, setOwnershipId] = useState<string>("");
  const [newOwnershipInfoName, setNewOwnershipInfoName] = useState<string>("");
  const [processingOwnershipId, setProcessingOwnershipId] =
    useState<boolean>(false);
  const [ownershipIdDialogOpen, setOwnershipIdDialogOpen] =
    useState<boolean>(false);

  return (
    <>
      {processingOwnershipId ? (
        <LinearProgress className="ml-4 my-4 w-full" color="secondary" />
      ) : null}
      <Dialog
        onClose={() => setOwnershipIdDialogOpen(false)}
        open={ownershipIdDialogOpen}
      >
        <DialogTitle> Create New Tracking Set</DialogTitle>
        <DialogContent>
          <TextField
            color="secondary"
            placeholder="This needs a name..."
            value={newOwnershipInfoName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewOwnershipInfoName(event.target.value);
            }}
            error={!!updateError}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            component="span"
            size="small"
            onClick={async () => {
              setProcessingOwnershipId(true);
              fetch("/api/updateOwnership", {
                ...DEFAULT_POST_OPTIONS,
                body: JSON.stringify({
                  name: newOwnershipInfoName,
                }),
              })
                .then(async (resp) => {
                  if (resp.status != 201) {
                    setUpdateError("Something went wrong!");
                    console.log(resp.status, resp.statusText);
                    return;
                  }
                  const newOwnershipInfoResponse = await resp.json();
                  setOwnershipId(newOwnershipInfoResponse.id);
                  setGlobalOwnershipId(newOwnershipInfoResponse.id);
                })
                .finally(() => {
                  setProcessingOwnershipId(false);
                });
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Grid
        container
        className="w-screen h-screen"
        justifyContent="center"
        alignItems="center"
      >
        {
          <Stack spacing={2}>
            <Grid xs={12}>
              <Typography
                color={"text"}
                variant="h5"
                justifyItems="left"
                width="100%"
              >
                Enter a tracking ID...
              </Typography>
            </Grid>
            <Stack
              direction="row"
              spacing={2}
              justifyItems="center"
              alignContent="center"
            >
              <TextField
                color="secondary"
                value={ownershipId}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setOwnershipId(event.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Tooltip
                        placement="right-start"
                        title="This will look something like 'xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'"
                      >
                        <Info color="warning" />
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                disabled={!ownershipId}
                variant="contained"
                onClick={() => {
                  setGlobalOwnershipId(ownershipId);
                }}
              >
                Get Tracking!
              </Button>
            </Stack>
            <Typography>Or...</Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyItems="center"
              alignContent="center"
            >
              <Button
                variant="contained"
                onClick={async () => {
                  setOwnershipIdDialogOpen(true);
                }}
              >
                Start a new tracking set!
              </Button>
            </Stack>
          </Stack>
        }
      </Grid>
    </>
  );
}
