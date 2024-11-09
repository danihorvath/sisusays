import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import { Controller, SubmitHandler, useForm } from "react-hook-form";
  
  interface UserStatFormFields {
    gender: string;
    maritalStatus: string;
    ageGroup: string;
    educationLevel: string;
  }
  
  export const UserStatisticsForm = () => {
    const { handleSubmit, control } = useForm<UserStatFormFields>();
    const onSubmit: SubmitHandler<UserStatFormFields> = (data) =>
      console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" gap={2} flexDirection="column">

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel>Gender</InputLabel>
              <Select {...field} label="Gender">
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="nonBinary">Non-Binary</MenuItem>
                <MenuItem value="preferNotToSay">Prefer not to say</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="maritalStatus"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel>Marital Status</InputLabel>
              <Select {...field} label="Marital Status">
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="divorced">Divorced</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="ageGroup"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel>Age Group</InputLabel>
              <Select {...field} label="Age Group">
                <MenuItem value="18-24">18-24</MenuItem>
                <MenuItem value="25-34">25-34</MenuItem>
                <MenuItem value="35-44">35-44</MenuItem>
                <MenuItem value="45-54">45-54</MenuItem>
                <MenuItem value="55+">55+</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="educationLevel"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel>Education Level</InputLabel>
              <Select {...field} label="Education Level">
                <MenuItem value="highSchool">High School</MenuItem>
                <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
                <MenuItem value="master">Master's Degree</MenuItem>
                <MenuItem value="phd">Ph.D.</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        </Box>
      </form>
    );
  };