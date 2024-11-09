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

export const Menu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    "Tallberginkatu 1 C (Apartment building)",
    "Kallio (District)",
    "Helsinki (City)",
    "Uusimaa (Regional)",
    "Finland (National)",
  ];

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleClick} color="secondary" size="large">
          <Tooltip title="Select scope to participate">
            <MenuIcon sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>

        <Typography variant="h6" component="div">
          {options[0]}
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
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};
