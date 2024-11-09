import { Avatar, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuthQuery, useLogout } from "@/queries/Auth";
import { Menu } from "./Menu";
import { NewScope } from "./NewScope";

export const HEADER_HEIGHT = 100;

export const Header = () => {
  const { data } = useAuthQuery();
  const logout = useLogout();

  return (
    <Box
      bgcolor="primary.main"
      color="primary.contrastText"
      px={3}
      py={1}
      height={HEADER_HEIGHT}
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Menu />
      <RouterLink to="/">{/* <Logo height={300} /> */}</RouterLink>
      {data && (
        <Box display="flex" alignItems="center" gap={2}>
          <NewScope />
          <Button color="secondary" variant="text" onClick={logout}>
            Logout
          </Button>

          <Box display="flex" alignItems="center" gap={1}>
            <Avatar />
          </Box>
        </Box>
      )}
    </Box>
  );
};
