import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const scopes = [
  {
    name: "Tallberginkatu 1 C",
    type: "Apartment building",
    slug: "tallberginkatu-1-c",
  },
  {
    name: "Kallio",
    type: "District",
    slug: "kallio",
  },
  {
    name: "Helsinki",
    type: "City",
    slug: "helsinki",
  },
  {
    name: "Uusimaa",
    type: "Regional",
    slug: "uusimaa",
  },
  {
    name: "Finland 🇫🇮",
    type: "National",
    slug: "finland",
  },
];

export const ScopePage = () => {
  const params = useParams();
  return (
    <Container>
      <Typography variant="subtitle1">Democracy of its best in</Typography>
      <Typography variant="h3">
        {scopes.find((v) => v.slug === params.scope)?.name}
      </Typography>
    </Container>
  );
};
