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
  nextSlide?: () => void;
}

export const FeedItem = ({ data, nextSlide }: FeedItemProps) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Container sx={{ width: "100%", height: "100%", py: 3 }} disableGutters>
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
          <Typography variant="h5" lineHeight={1}>
            {data.title}
          </Typography>
          <Typography>{data.description}</Typography>
        </CardContent>

        <CardActions sx={{ p: 3 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<ThumbDown />}
            fullWidth
            size="large"
            onClick={nextSlide}
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
