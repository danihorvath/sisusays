import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { ArgumentsDialog } from "./ArgumentsDialog";

interface IdeaFeedItemProps {
  data: {
    title: string;
    description: string;
    pro: string[];
    con: string[];
  };
}

export const IdeaFeedItem = ({ data }: IdeaFeedItemProps) => {
  return (
    <Container
      maxWidth="md"
      sx={{ width: "100%", height: "100%", py: 3 }}
      disableGutters
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
        }}
        elevation={0}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box display="flex" gap={0.5}>
            <Chip
              label="💡 Idea"
              sx={{ position: "inline", mr: 1, fontSize: 15 }}
              color="success"
            />
            <Chip
              label="🕒 Under Discussion"
              sx={{ position: "inline", mr: 1, fontSize: 15 }}
              color="primary"
            />
          </Box>
          <Typography variant="h4">{data.title}</Typography>
          <Typography>{data.description}</Typography>
        </CardContent>

        <CardActions sx={{ p: 3 }}>
          <ArgumentsDialog data={data} />
        </CardActions>
      </Card>
    </Container>
  );
};
