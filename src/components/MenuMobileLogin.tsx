import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Box,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { useLogout } from "@/queries/Auth";
import { Link as RouterLink } from "react-router-dom";
import { NewScope } from "./NewScope";

export const MenuMobileLogin = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const logout = useLogout();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleClick} color="secondary" size="large">
          <Avatar />
        </IconButton>
      </Box>
      <MuiMenu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem>
          <RouterLink
            style={{ textDecoration: "none", color: "black" }}
            to="/profile"
            onClick={handleClose}
          >
            Profile
          </RouterLink>
        </MenuItem>
        <NewScope onClick={handleClose} />
        <MenuItem onClick={logout}>Logout</MenuItem>
      </MuiMenu>
    </>
  );
};
