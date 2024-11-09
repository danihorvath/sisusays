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
      <Box
        sx={{
          display: "flex",
          position: "relative",
          bottom: 16,
          alignItems: "center",
          background: "lightgrey",
          borderBottom: "2px solid grey"
        }}>
        <Typography justifySelf="center" variant="subtitle1" paddingLeft={2}>Democracy of its best in:</Typography>
        <Typography justifySelf="center" variant="h6" ml={1}>{selectedScope.name}</Typography>
      </Box>
      <Container sx={{ mb: 3 }}>
        {/* title */}
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          justifySelf: "center",
          width: 200,
          borderRadius: 20,
          background: "#fe920094",
          border: "1px solid #fe9700"
        }}>
          <Typography variant="h3" sx={{
            color: "#fe9700",
          }}>Scope</Typography>
        </Box>

      </Container>
      <Feed />
    </>
  );
};
