import { Box, Button, List, ListItem, TextField, Typography } from "@mui/material";
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
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Comments
      </Typography>
      <List
        sx={{
          borderRadius: "4px",
          padding: "8px",
          marginBottom: "8px",
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
                padding: "8px",
                width: "100%",
                backgroundColor: "#f9f9f9",
              }}
            >
              {comment}
            </Box>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <TextField
          label="Add a comment"
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