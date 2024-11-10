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
  const [selectedType, setSelectedType] = useState("pro");
  const [pros, setPros] = useState(data.pro);
  const [cons, setCons] = useState(data.con);
  const [selectedItems, setSelectedItems] = useState({
    pros: [] as number[],
    cons: [] as number[],
  });

  const handleToggleSelect = (type: "pros" | "cons", index: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [type]: prev[type].includes(index)
        ? prev[type].filter((i) => i !== index)
        : [...prev[type], index],
    }));
  };

  const handleSubmit = () => {
    if (value.trim()) {
      if (selectedType === "pro") setPros((prev) => [...prev, value]);
      else setCons((prev) => [...prev, value]);
      setValue("");
    }
  };

  const alertStyles = (
    isSelected: boolean,
    selectedColor: string,
    defaultColor: string
  ) => ({
    cursor: "pointer",
    backgroundColor: isSelected ? selectedColor : defaultColor,
    border: `2px solid ${isSelected ? selectedColor : defaultColor}`,
    transition: "background-color 0.3s ease, border 0.3s ease",
  });

  const renderAlertList = (
    items: string[],
    type: "pros" | "cons",
    selectedColor: string,
    defaultColor: string,
    severity: "success" | "error"
  ) => (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        maxHeight: 200,
        overflowY: "auto",
        pr: 1,
      }}
    >
      {items.map((item, index) => (
        <Alert
          key={index}
          icon={false}
          severity={severity}
          onClick={() => handleToggleSelect(type, index)}
          sx={alertStyles(
            selectedItems[type].includes(index),
            selectedColor,
            defaultColor
          )}
        >
          {item}
        </Alert>
      ))}
    </Box>
  );

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
          {renderAlertList(pros, "pros", "#c8e6c9", "#e8f5e9", "success")}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" mb={3}>
            Cons
          </Typography>
          {renderAlertList(cons, "cons", "#ffcdd2", "#ffebee", "error")}
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
        <RadioGroup
          row
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <FormControlLabel value="pro" control={<Radio />} label="Pro" />
          <FormControlLabel value="con" control={<Radio />} label="Con" />
        </RadioGroup>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};
