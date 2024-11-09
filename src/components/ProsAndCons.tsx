import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  Grid2 as Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface ProsAndConsProps {
  data: {
    title: string;
    description: string;
    pro: string[];
    con: string[];
  };
}

export const ProsAndCons = ({ data }: ProsAndConsProps) => {
  const [value, setValue] = useState("");

  return (
    <Container
      maxWidth="md"
      sx={{ my: 3, display: "flex", flexDirection: "column", gap: 5 }}
    >
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography variant="h6" mb={3}>
            Pros
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {data.pro.map((pro, index) => (
              <Alert key={index} icon={false} severity="success">
                {pro}
              </Alert>
            ))}
          </Box>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6" mb={3}>
            Cons
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {data.con.map((con, index) => (
              <Alert key={index} icon={false} severity="error">
                {con}
              </Alert>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Add your own argument"
          fullWidth
          multiline
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <RadioGroup row>
          <FormControlLabel value="pro" control={<Radio />} label="Pro" />
          <FormControlLabel value="con" control={<Radio />} label="Con" />
        </RadioGroup>
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
  );
};
