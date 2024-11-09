import { Feed } from "@/components/Feed";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export const scopes = [
  {
    name: "Finland 🇫🇮",
    type: "National",
    slug: "finland",
  },
  {
    name: "Uusimaa",
    type: "Regional",
    slug: "uusimaa",
  },
  {
    name: "Helsinki",
    type: "City",
    slug: "helsinki",
  },
  {
    name: "Kallio",
    type: "District",
    slug: "kallio",
  },
  {
    name: "Tallberginkatu 1 C",
    type: "Apartment",
    slug: "tallberginkatu-1-c",
  },
];

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
