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
import { NewTopicForm } from "./NewTopicForm";

export const NewTopic = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen} variant="contained" color="secondary">
        New topic
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Add a new topic</DialogTitle>
        <DialogContent
          sx={{ gap: 2, display: "flex", flexDirection: "column" }}
        >
          <DialogContentText>
            <Typography>
              Create a new topic to start a conversation and gather opinions.
            </Typography>
            <Typography>
              Topics can be about anything, from local issues to global
              challenges.
            </Typography>
          </DialogContentText>
          <NewTopicForm handleClose={handleClose} />
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
