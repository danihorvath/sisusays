import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Link,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Logo } from "@/components/Logo";
import { AuthRequest, useAuthMutation } from "@/queries/Auth";
import { useState } from "react";
const Login = () => {
  const authMutation = useAuthMutation();
  const [open, setOpen] = useState(false);

  const { control, handleSubmit } = useForm<AuthRequest>({
    defaultValues: {
      identifier: "DEMOGR8435JGH54",
      password: "DEMOGR8435JGH54",
    },
  });

  const onSubmit: SubmitHandler<AuthRequest> = () => {
    authMutation.mutate();
  };

  return (
    <>
      <Box height="100dvh" alignContent="center" py={4} boxSizing="border-box">
        <Container maxWidth="md">
          <Fade in>
            <Slide in direction="up">
              <Box display="flex" flexDirection="column" gap={2}>
                <Box mb={2} justifyContent="center" display="flex">
                  <Logo height={160} />
                </Box>
                <Typography variant="h5">
                  Welcome to SisuSays – Empowerig the Growth of a Digital Democracy!
                </Typography>
                <Typography variant="caption">
                  In Finland, you have the power to make decisions that affect
                  your community, your city, and even the whole country. SisuSays
                  is a platform where you can join discussions
                  on important issues, vote on polls, and help guide the future
                  of our society. Whether it’s about climate action, housing,
                  education, or local issues – your voice matters.
                </Typography>

                <Typography variant="caption" mb={3}>
                  Ready to get started? Log in with the unique ID
                  and help build a better Finland for everyone!
                </Typography>

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
                    Let me in
                  </LoadingButton>
                </form>
                <Link
                  mt={2}
                  onClick={() => setOpen(true)}
                  sx={{ cursor: "pointer" }}
                >
                  Learn more about how it works
                </Link>
              </Box>
            </Slide>
          </Fade>
        </Container>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>Learn more about how it works</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography component="ol">
              <Typography component="li" fontWeight={600}>
                Receive Your Unique ID
              </Typography>
              <Typography>
                Every January, you will receive a letter with a unique ID. This
                ID is your personal key to accessing the platform.
              </Typography>
              <Typography component="li" fontWeight={600}>
                Set Up Your Account
              </Typography>
              <Typography>
                When you log in for the first time, use the unique ID from your
                letter. You’ll be asked to set up your password and create your
                account. After that, you’re ready to start making an impact!
              </Typography>
              <Typography component="li" fontWeight={600}>
                Join Stakeholder Groups
              </Typography>
              <Typography>
                Based on your unique ID, you will be invited to different
                stakeholder scopes that are important to you. These can include:
                <Typography component="ul">
                  <Typography component="li">
                    Schools: If you’re a student or teacher, you can join
                    discussions about the education system.
                  </Typography>
                  <Typography component="li">
                    Workplaces: Join your workplace’s group to discuss topics
                    that affect employees.
                  </Typography>
                </Typography>
              </Typography>
              <Typography component="li" fontWeight={600}>
                Geographical Scopes
              </Typography>
              <Typography>
                You’ll automatically be added to geographical scopes based on
                where you live, such as:
                <Typography component="ul">
                  <Typography component="li">
                    Apartment buildings: Share ideas and vote on local community
                    issues.
                  </Typography>
                  <Typography component="li">
                    District: Participate in discussions about your
                    neighborhood.
                  </Typography>
                  <Typography component="li">
                    City: Have your say on matters that affect your whole city.
                  </Typography>
                </Typography>
              </Typography>
              <Typography component="li" fontWeight={600}>
                National Scope
              </Typography>
              <Typography>
                You can also choose to participate in national-level topics that
                impact Finland as a whole. From environmental policies to
                healthcare reforms, you can contribute to discussions about the
                future of our country.
              </Typography>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Login;
