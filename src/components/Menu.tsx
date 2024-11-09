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
import { useNavigate, useParams } from "react-router-dom";

export const Menu = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedScope = scopes.find((v) => v.slug === params.scope);

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleClick} color="secondary" size="large">
          <Tooltip title="Select scope to participate">
            <MenuIcon sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>

        <Typography variant="h6" component="div">
          {selectedScope
            ? `${selectedScope.name} (${selectedScope.type})`
            : "NOT FOUND"}
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
            onClick={() => {
              navigate(`/${option.slug}`);
              handleClose();
            }}
          >
            {option.name} ({option.type})
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};
