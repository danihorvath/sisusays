import { Avatar, Box, Button, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuthQuery, useLogout } from "@/queries/Auth";
import { Menu } from "./Menu";
import { MenuMobileLogin } from "./MenuMobileLogin"
import { NewScope } from "./NewScope";
import { useTheme } from '@mui/material/styles';

export const HEADER_HEIGHT = 100;

export const Header = () => {
  const { data } = useAuthQuery();
  const logout = useLogout();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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
      mb={2}
    >
      <Menu />
      <RouterLink to="/">{/* <Logo height={300} /> */}</RouterLink>
      {data && (
        <Box display="flex" alignItems="center" gap={2}>
          <NewScope />

          {/* login */}
          <Box>
            {/* login normal */}
            <Box display={isMobile ? 'none' : 'flex'}>
              <Button color="secondary" variant="text" onClick={logout}>
                Logout
              </Button>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
              </Box>
            </Box>

            {/* login mobile */}
            <Box display={isMobile ? 'flex' : 'none'} flexDirection="column"  >
              <MenuMobileLogin />
            </Box>
          </Box>

        </Box>
      )}
    </Box>
  );
};
