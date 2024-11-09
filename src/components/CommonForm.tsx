import { Box, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface NewScopeFormFields {
  title: string;
  description: string;
}

interface CommonFormProps {
  handleClose: () => void;
}

export const CommonForm = ({ handleClose }: CommonFormProps) => {
  const { handleSubmit, control } = useForm<NewScopeFormFields>();
  const onSubmit: SubmitHandler<NewScopeFormFields> = () => handleClose();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" gap={2} flexDirection="column">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField label="Title" size="small" fullWidth {...field} />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              label="Description"
              size="small"
              fullWidth
              multiline
              rows={4}
              {...field}
            />
          )}
        />
      </Box>
    </form>
  );
};
