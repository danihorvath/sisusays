import { Container, Card, CardContent, Typography, Box } from "@mui/material";
import { useState } from "react";
import { CommentSection } from "@/components/CommentSection.tsx";
import { IdeaFeed } from "./IdeaFeed";

export interface Topic {
  id: number;
  title: string;
  description: string;
}

export const TopicItem = () => {
  const [comments, setComments] = useState<string[]>([]);

  const addComment = (comment: string) => {
    if (comment.trim()) {
      setComments([...comments, comment]);
    }
  };

  return (
    <Container sx={{ height: "100%", paddingBottom: 4 }}>
      {/* Topic title and description */}
      {/* <Typography variant="h4" sx={{ marginBottom: 6 }}>
        {topic.title}
      </Typography>
      <Typography sx={{ marginBottom: 6 }}>
        {topic.description}
      </Typography> */}
      <IdeaFeed />

      <Card
        sx={{
          display: "flex",
          mt: 7,
          mb: 10,
          pb: 5,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 250,
            height: 100,
            alignItems: "center",
          }}>
          <Typography>Pro</Typography>

        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 250,
            height: 100,
            alignItems: "center",
          }}>
          <Typography>Con</Typography>
        </Box>
      </Card>

      <Card sx={{ height: "auto", flexDirection: "column", border: "2px solid #ccc" }}>
        <CardContent sx={{ flexGrow: 1, display: "flex", bottom: 10, flexDirection: "column", height: 65, justifyContent: "center" }}>
          {/* Comment Section */}
          <CommentSection comments={comments} addComment={addComment} />
        </CardContent>
      </Card>
    </Container >
  );
};
