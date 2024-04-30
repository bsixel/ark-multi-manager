import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export type SnackDefinition = {
  snackId: string;
  level: "success" | "info" | "warning" | "error";
  message: string;
};

export default function SnackAlert({
  snackOptions,
}: {
  snackOptions: SnackDefinition;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return open ? (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={snackOptions.level}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackOptions.message}
        </Alert>
      </Snackbar>
    </div>
  ) : null;
}
