import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Tooltip,
  Box,
  Link,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { scopes } from "@/data";
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export const Menu = () => {
  const params = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedScope =
    scopes.find((v) => v.slug === params.scope) || scopes[0];

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleClick} color="secondary" size="large">
          <Tooltip title="Select scope to participate">
            <MenuIcon sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>
        <Link
          display={isMobile ? "none" : "block"}
          component={RouterLink}
          to={`/${selectedScope.slug}`}
          color="secondary"
          underline="none"
          variant="h6"
        >
          {selectedScope
            ? `${selectedScope.name} (${selectedScope.type})`
            : "NOT FOUND"}
        </Link>
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
