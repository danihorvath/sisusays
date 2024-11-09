import { Feed } from "@/components/Feed";
import { Container, Typography } from "@mui/material";
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
    type: "Apartment building",
    slug: "tallberginkatu-1-c",
  },
];

export const ScopePage = () => {
  const params = useParams();

  const selectedScope =
    scopes.find((v) => v.slug === params.scope) || scopes[0];

  return (
    <Container>
      <Typography variant="subtitle1">Democracy of its best in</Typography>
      <Typography variant="h3">{selectedScope.name}</Typography>

      <Feed />
    </Container>
  );
};
