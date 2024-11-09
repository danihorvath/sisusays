import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface NewScopeFormFields {
  name: string;
  type: string;
}

export const RegisterScopeForm = () => {
  const { handleSubmit, control } = useForm<NewScopeFormFields>();
  const onSubmit: SubmitHandler<NewScopeFormFields> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" gap={2} flexDirection="column">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Name of the scope"
              size="small"
              fullWidth
              {...field}
            />
          )}
        />

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Type of scope
              </InputLabel>
              <Select {...field} label="Type of scope">
                <MenuItem value={0}>Apartment</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </Box>
    </form>
  );
};
