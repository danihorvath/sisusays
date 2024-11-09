import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100dvh" pb={3}>
      <Header />
      <Outlet />
    </Box>
  );
};
