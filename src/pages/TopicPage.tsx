import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { IdeaFeed } from "@/components/IdeaFeed";
import { topics } from "@/data";

export const TopicPage = () => {
  const params = useParams();

  const selectedTopic = topics.find((v) => v.id.toString() === params.topic);

  return (
    <>
      <Box bgcolor="#d5d5d5">
        <Container maxWidth="lg">
          <Box py={1}>
            <Typography textAlign="center">
              Great proposals for:{" "}
              <Typography fontWeight={600} component="span">
                {selectedTopic?.title}
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
      <IdeaFeed />
    </>
  );
};
