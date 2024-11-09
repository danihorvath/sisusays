import { Feed } from "@/components/Feed";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { scopes } from "@/data";

export const ScopePage = () => {
  const params = useParams();

  const selectedScope =
    scopes.find((v) => v.slug === params.scope) || scopes[0];

  return (
    <>
      <Box bgcolor="#d5d5d5">
        <Container maxWidth="lg">
          <Box py={1}>
            <Typography textAlign="center">
              Democracy of its best in:{" "}
              <Typography fontWeight={600} component="span">
                {selectedScope.name}
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Feed />

      <IconButton color="primary" aria-label="add" size="large"
        sx={{
          border: "2px solid black",
          width: 90,
          height: 90,
          fontSize: 200,
        }}>
        <AddIcon />
      </IconButton>

    </>
  );
};
