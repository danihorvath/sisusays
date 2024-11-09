import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, Fade, Slide, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Logo } from "@/components/Logo";
import { AuthRequest, useAuthMutation } from "@/queries/Auth";

const Login = () => {
  const authMutation = useAuthMutation();
  const { control, handleSubmit } = useForm<AuthRequest>({
    defaultValues: { identifier: "", password: "" },
  });

  const onSubmit: SubmitHandler<AuthRequest> = (values) => {
    authMutation.mutate(values);
  };

  return (
    <Box height="100dvh" alignContent="center" py={4} boxSizing="border-box">
      <Container maxWidth="md">
        <Fade in>
          <Slide in direction="up">
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                textAlign="center"
                py={5}
                px={[2, 4]}
              >
                <Box mb={2} justifyContent="center" display="flex">
                  <Logo height={200} />
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box display="flex" flexDirection="column" gap={2} mb={3}>
                    <Controller
                      name="identifier"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          label="Citizen ID"
                        />
                      )}
                    />
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          label="Password"
                          type="password"
                        />
                      )}
                    />
                  </Box>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    fullWidth
                    loading={authMutation.isPending}
                  >
                    Authenticate
                  </LoadingButton>
                </form>
              </Box>
            </Box>
          </Slide>
        </Fade>
      </Container>
    </Box>
  );
};

export default Login;
