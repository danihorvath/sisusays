import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100dvh">
      <Header />
      <Box my={3}>
        <Outlet />
      </Box>
    </Box>
  );
};
