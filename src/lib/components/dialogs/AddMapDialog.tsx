"use client";

import { ArkMap } from "@/lib/types/global";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import { GlobalContext } from "../layout/appBarLayout";

export type AddMapDialogRef = {
  open: () => void;
};

type AddMapDialogProps = {
  onClose?: () => void;
  onMapAdded?: () => void;
};

const AddMapDialog = forwardRef<AddMapDialogRef, AddMapDialogProps>(
  function AddMapDialog({ onClose, onMapAdded }, ref) {
    const {
      makeSnack,
      setUploadInProgress,
      metadataQuery: { exec: loadMetadata },
    } = useContext(GlobalContext);

    const [showDialog, setShowMapDialog] = useState<boolean>(false);
    const [newMap, setNewMap] = useState<ArkMap>({
      name: "",
      id: "",
      order: -1,
    });

    useImperativeHandle(ref, () => ({
      open: () => {
        setShowMapDialog(true);
      },
    }));

    const handleClose = () => {
      setShowMapDialog(false);
      setNewMap({ name: "", id: "", order: -1 });
      if (onClose) {
        onClose();
      }
    };

    const addMap = async () => {
      if (!newMap.name || !newMap.id) {
        makeSnack("error", `Error adding map ${newMap.name}! Missing info.`);
        return;
      }
      setUploadInProgress(true);
      fetch("/api/maps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMap),
      })
        .then(async (resp) => {
          const respData = await resp.json();
          if (respData.error) {
            throw new Error(respData.error);
          }
          loadMetadata();
          makeSnack("success", `Successfully added map ${newMap.name}!`);
          setNewMap({ id: "", name: "", order: -1 });
          if (onMapAdded) {
            onMapAdded();
          }
          setShowMapDialog(false);
        })
        .catch((err) => {
          makeSnack("error", `Error adding map ${newMap.name}!`);
          console.error(err);
        })
        .finally(() => {
          setUploadInProgress(false);
        });
    };

    return (
      <Dialog open={showDialog} onClose={handleClose} disableEscapeKeyDown>
        <DialogTitle> Add a map </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a map to the list of available maps you can group creatures
            under. The map will be available to everyone.
          </DialogContentText>
          <TextField
            color="secondary"
            sx={{
              marginTop: "1rem",
            }}
            fullWidth
            required
            label="Map Name"
            value={newMap.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewMap({ ...newMap, name: event.target.value });
            }}
          />
          <TextField
            color="secondary"
            required
            fullWidth
            sx={{
              marginTop: "1rem",
            }}
            label="Map ID"
            value={newMap.id}
            helperText="This should be whatever string is used by an Ark server to specify the map played"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewMap({ ...newMap, id: event.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            component="span"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            component="span"
            onClick={addMap}
            disabled={!newMap.id || !newMap.name}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default AddMapDialog;
