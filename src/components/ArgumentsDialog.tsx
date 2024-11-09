import { Comment } from "@mui/icons-material";
import { Button, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { ProsAndCons } from "./ProsAndCons";

interface ArgumentsDialogProps {
  data: {
    title: string;
    description: string;
    pro: string[];
    con: string[];
  };
}

export const ArgumentsDialog = ({ data }: ArgumentsDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Comment />}
        fullWidth
        size="large"
        onClick={() => setOpen(true)}
      >
        See arguments!
      </Button>
      <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <ProsAndCons data={data} />
      </SwipeableDrawer>
    </>
  );
};
