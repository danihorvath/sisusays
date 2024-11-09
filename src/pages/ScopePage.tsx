import { Container, Typography } from "@mui/material";

export const scopes = [
  {
    name: "Tallberginkatu 1 C",
    type: "Apartment building",
  },
  {
    name: "Kallio",
    type: "District",
  },
  {
    name: "Helsinki",
    type: "City",
  },
  {
    name: "Uusimaa",
    type: "Regional",
  },
  {
    name: "Finland 🇫🇮",
    type: "National",
  },
];

export const ScopePage = () => {
  return (
    <Container>
      <Typography variant="h3">Scope</Typography>
    </Container>
  );
};
