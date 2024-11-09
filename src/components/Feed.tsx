import { Box } from "@mui/material";
import { FeedItem } from "./FeedItem";

export const Feed = () => {
  const topics = [
    "Topic 1",
    "Topic 2",
    "Some very long text that will get truncated with an ellipsis when it overflows beyond the max width of the container. This text is really long and should be cut off.",
    "Topic 4",
  ];
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "60%", // 60% of the screen width
        maxWidth: "800px", // Optional: Maximum width
        margin: "0 auto", // Centering the box
        padding: "20px", // Some padding inside
        boxSizing: "border-box",
        "@media (max-width: 768px)": {
          width: "100%", // Full width for small screens
          borderLeft: 0,
          borderRight: 0,
        },
      }}
    >
      {topics.map((title, index) => (
        <FeedItem key={index} data={{ title }} />
      ))}
    </Box>
  );
};
