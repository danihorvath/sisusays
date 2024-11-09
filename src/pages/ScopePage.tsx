import { Feed } from "@/components/Feed";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

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
    </>
  );
};
