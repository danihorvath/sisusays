import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  Grid,
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
  const [selectedPros, setSelectedPros] = useState<number[]>([]);
  const [selectedCons, setSelectedCons] = useState<number[]>([]);

  const handleProClick = (index: number) => {
    setSelectedPros((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index) // Deselect if already selected
        : [...prevSelected, index] // Select if not selected
    );
  };

  const handleConClick = (index: number) => {
    setSelectedCons((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index) // Deselect if already selected
        : [...prevSelected, index] // Select if not selected
    );
  };

  return (
    <Container
      maxWidth="md"
      sx={{ my: 3, display: "flex", flexDirection: "column", gap: 5 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" mb={3}>
            Pros
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {data.pro.map((pro, index) => (
              <Alert
                key={index}
                icon={false}
                severity="success"
                onClick={() => handleProClick(index)}
                sx={{
                  cursor: "pointer",
                  backgroundColor: selectedPros.includes(index)
                    ? "#c8e6c9" // Darker green if selected
                    : "#e8f5e9", // Default lighter green
                  border: selectedPros.includes(index)
                    ? "2px solid #4caf50"
                    : "1px solid #c8e6c9",
                  transition: "background-color 0.3s ease, border 0.3s ease",
                }}
              >
                {pro}
              </Alert>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" mb={3}>
            Cons
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {data.con.map((con, index) => (
              <Alert
                key={index}
                icon={false}
                severity="error"
                onClick={() => handleConClick(index)}
                sx={{
                  cursor: "pointer",
                  backgroundColor: selectedCons.includes(index)
                    ? "#ffcdd2" // Darker red if selected
                    : "#ffebee", // Default lighter red
                  border: selectedCons.includes(index)
                    ? "2px solid #f44336"
                    : "1px solid #ffcdd2",
                  transition: "background-color 0.3s ease, border 0.3s ease",
                }}
              >
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