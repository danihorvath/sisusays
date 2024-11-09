import { Box, Button, List, ListItem, TextField } from "@mui/material";
import { useState } from "react";

interface CommentSectionProps {
  comments: string[];
  addComment: (comment: string) => void;
}

export const CommentSection = ({ comments, addComment }: CommentSectionProps) => {
  const [comment, setComment] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addComment(comment);
      setComment(""); // Clear the input after adding the comment
    }
  };

  return (
    <Box>
      {/* <Typography variant="h6">
        Add Argument
      </Typography> */}
      <List
        sx={{
          borderRadius: "4px",
          // px: "8px",
          // marginBottom: "8px",
          bgcolor: "background.paper",
          maxHeight: 300,
          overflow: "auto",
        }}
      >
        {comments.map((comment, index) => (
          <ListItem key={index} sx={{ marginBottom: "8px" }}>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                // padding: "8px",
                width: "100%",
                backgroundColor: "#f9f9f9",
              }}
            >
              {comment}
            </Box>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: "flex" }}>
        <TextField
          label="Add Argument"
          variant="outlined"
          size="small"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" color="primary" onClick={() => addComment(comment)}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};