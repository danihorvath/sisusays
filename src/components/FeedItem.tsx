import { ThumbDown, ThumbUp } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

interface FeedItemProps {
  data: {
    id: number;
    title: string;
    description: string;
  };
}

export const FeedItem = ({ data }: FeedItemProps) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Container sx={{ height: "100%" }}>
      <Card
        sx={{ height: "100%", display: "flex", flexDirection: "column", p: 2 }}
      >
        {/* Unimportant Button */}

        {/* Child content in the center */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h4">{data.title}</Typography>
          <Typography>{data.description}</Typography>
        </CardContent>

        {/* Important Button */}

        <CardActions>
          <Button
            variant="contained"
            color="error"
            startIcon={<ThumbDown />}
            fullWidth
            size="large"
          >
            Unimportant
          </Button>
          <Button
            variant="contained"
            color="success"
            endIcon={<ThumbUp />}
            fullWidth
            size="large"
            onClick={() => {
              navigate(`/${params.scope ?? "finland"}/${data.id}`);
            }}
          >
            Important
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
