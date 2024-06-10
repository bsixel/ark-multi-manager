"use client";
import {
  Autocomplete,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useContext, useEffect, useState } from "react";
import { DEFAULT_POST_OPTIONS } from "@/lib/utils/ApiHelper";
import { GlobalContext } from "@/lib/components/layout/appBarLayout";
import { OwnershipInfo } from "@/lib/types/global";
import { LOCAL_PREFIX } from "@/lib/utils/constants";

const filter = createFilterOptions<OwnershipInfo>();
const uuidTester =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default function LandingPage() {
  const { setGlobalOwnershipId } = useContext(GlobalContext);

  const [updateError, setUpdateError] = useState<string>("");
  const [ownershipId, setOwnershipId] = useState<string>("");
  const [newOwnershipInfoName, setNewOwnershipInfoName] = useState<string>("");
  const [processingOwnershipId, setProcessingOwnershipId] =
    useState<boolean>(false);
  const [ownershipIdDialogOpen, setOwnershipIdDialogOpen] =
    useState<boolean>(false);
  const [knownOwnershipIds, setKnownOwnershipIds] = useState<OwnershipInfo[]>(
    []
  );

  useEffect(() => {
    const loadedKnownOwnershipIds = JSON.parse(
      localStorage.getItem(`${LOCAL_PREFIX}knownOwnershipId`) || "[]"
    );
    setKnownOwnershipIds(loadedKnownOwnershipIds);
  }, []);

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
        <Card
          sx={{
            padding: "2rem",
          }}
        >
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
              <Autocomplete
                onChange={(e, value) => {
                  if (typeof value === "string") {
                    setOwnershipId(value);
                  } else if (value.new) {
                    setOwnershipId(value.id);
                  }
                  setOwnershipId(
                    (typeof value === "string" ? value : value?.id) || ""
                  );
                }}
                getOptionKey={(oid) => (typeof oid === "string" ? oid : oid.id)}
                getOptionLabel={(oid) => {
                  if (typeof oid === "string") {
                    return oid;
                  }
                  if (oid.new) {
                    return oid.name;
                  } else {
                    return `${oid.name} (${oid.id})`;
                  }
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionDisabled={(option) => {
                  return !uuidTester.test(option.id);
                }}
                disablePortal
                freeSolo
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="combo-box-ownershipId"
                options={knownOwnershipIds}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  const exists = options.some(
                    (option) => inputValue === option.id
                  );
                  if (exists || !inputValue) return filtered;
                  if (uuidTester.test(inputValue)) {
                    filtered.push({
                      id: inputValue,
                      new: true,
                      name: `Search for tracking ID "${inputValue}"`,
                    });
                  } else {
                    filtered.push({
                      id: inputValue,
                      new: true,
                      name: `Invalid tracking ID "${inputValue}" - should look something like "xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`,
                    });
                  }

                  return filtered;
                }}
                sx={{ width: 300 }}
                renderInput={(params) => {
                  const { ...safeParams } = params;
                  delete safeParams["key"];
                  return (
                    <TextField
                      {...safeParams}
                      key="map-textfield"
                      label="Tracking ID..."
                    />
                  );
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
        </Card>
      </Grid>
    </>
  );
}
