import { Box, Container } from "@mui/material";
import Feed from "./Feed";

const Home = () => {
  return (
    <Box height="100dvh" alignContent="center" py={4} boxSizing="border-box">
      <Container maxWidth="sm"></Container>
      <div>
        <Feed>
          <p>Topic 1</p>
          <p>Topic 2</p>
          <p>Some very long text that will get truncated with an ellipsis when it overflows beyond the max width of the container. This text is really long and should be cut off. </p>
          <p>Topic 4</p>
        </Feed>
      </div>
    </Box>
  );
};

export default Home;