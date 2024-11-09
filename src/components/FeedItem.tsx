import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

interface FeedItemProps {
  data: {
    title: string;
  };
}

export const FeedItem = ({ data }: FeedItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // Distribute children horizontally
        alignItems: "center", // Vertically center items
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      {/* Unimportant Button */}
      <Button variant="contained" color="error" startIcon={<ThumbDown />}>
        Unimportant
      </Button>

      {/* Child content in the center */}
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          fontSize: "25px",
          maxWidth: "40%",
          overflow: "hidden",
        }}
      >
        {data.title}
      </Box>

      {/* Important Button */}
      <Button variant="contained" color="success" endIcon={<ThumbUp />}>
        Important
      </Button>
    </Box>
  );
};
