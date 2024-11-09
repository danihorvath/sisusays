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
import { CommonForm } from "./CommonForm";

export const NewIdea = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen} variant="outlined" color="success">
        New idea
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Add a new idea</DialogTitle>
        <DialogContent
          sx={{ gap: 2, display: "flex", flexDirection: "column" }}
        >
          <DialogContentText>
            <Typography>
              Share your idea with the community and start a discussion.
            </Typography>
            <Typography>
              What is the problem you want to solve? What is your solution? What
              are the pros and cons?
            </Typography>
          </DialogContentText>
          <CommonForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit" variant="contained">
            Power up our Democracy!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
