import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { RegisterScopeForm } from "./RegisterScopeForm";

export const NewScope = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="secondary" variant="contained" onClick={handleClickOpen}>
        New scope
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Register a new scope</DialogTitle>
        <DialogContent
          sx={{ gap: 2, display: "flex", flexDirection: "column" }}
        >
          <DialogContentText>
            <Typography>
              Create a new scope of contributors and empower your
              decision-making process.
            </Typography>
            <Typography>
              Define who will be involved in shaping the conversation and
              guiding the decisions.
            </Typography>
            <Typography>
              Whether it's a group of experts, community leaders, or voters, you
              can tailor the scope to include the right voices. Let's make
              democracy more inclusive and dynamic!
            </Typography>
          </DialogContentText>
          <RegisterScopeForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Power up our Democracy!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
