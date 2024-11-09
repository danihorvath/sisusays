import { useEffect, useState } from "react";
import { topics } from "@/components/Feed";
import { TopicItem, Topic } from "@/components/TopicItem";
import { Box, Typography } from "@mui/material";

export const TopicPage = () => {
  const [topic, setTopic] = useState<Topic | null>(null);

  useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    const topicId = parseInt(id, 10);

    const foundTopic = topics.find((topic) => topic.id === topicId);
    setTopic(foundTopic || null);
  }, []);

  if (!topic) {
    return <div>Topic not found!</div>;
  }

  return <>
    <Box sx={{
      display: "flex",
      width: 200,
      alignSelf: "center",
      borderRadius: 20,
      justifyContent: "center",
      background: "lightblue",
      border: "1px solid darkblue"
    }}>
      <Typography variant="h3" sx={{
        color: "darkblue",
        background: "lightblue",
      }}>Idea</Typography>

    </Box>


    <TopicItem topic={topic} />;
  </>
};