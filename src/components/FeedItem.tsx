import { ThumbDown, ThumbUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const [isAnimating, setIsAnimating] = useState(false);
  const animateRight = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      navigate(`/${params.scope ?? "finland"}/${data.id}`);
    }, 400);
  };
  const moveRightStyle: React.CSSProperties = {
    animation: isAnimating ? 'moveRight 2s forwards' : 'none',
  };
  const keyframes = `
    @keyframes moveRight {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;

  return (
    <Container
      maxWidth="md"
      sx={{ width: "100%", height: "100%", py: 3 }}
      disableGutters
    >
      {/* style for moving */}
      <style>{keyframes}</style>
      <Card style={moveRightStyle}
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
              label="Topic"
              sx={{ position: "inline", mr: 1, fontSize: 15 }}
              color="warning"
            />
            <Chip
              label="🕒 Under Discussion"
              sx={{ position: "inline", mr: 1, fontSize: 15 }}
              color="primary"
            />
          </Box>
          <Typography variant="h4">{data.title}</Typography>
          <Typography>{data.description}</Typography>
          {isAnimating && <div className="fade-out">Navigating...</div>}
        </CardContent>

        <CardActions sx={{ p: 3 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<ThumbDown />}
            fullWidth
            size="large"
            onClick={nextSlide}
            sx={{ height: 70, borderRadius: 5 }}
          >
            {isMobile && "Not interested"}
          </Button>
          <Button
            variant="contained"
            color="success"
            endIcon={<ThumbUp />}
            fullWidth
            size="large"
            onClick={() => {
              animateRight();

            }}
            sx={{ height: 70, borderRadius: 5 }}
          >
            {isMobile && "Go to discussion"}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
