import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { scopes } from "@/pages/ScopePage";

export const Menu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
          <Tooltip title="Select scope to participate">
            <MenuIcon sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>

        <Typography variant="h6" component="div">
          {scopes[0].name}
        </Typography>
      </Box>
      <MuiMenu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {},
        }}
      >
        {scopes.map((option) => (
          <MenuItem
            key={option.name}
            selected={option.name === scopes[0].name}
            onClick={handleClose}
          >
            {option.name}
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};
