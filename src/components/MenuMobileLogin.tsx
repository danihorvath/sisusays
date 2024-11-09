import {
    IconButton,
    Menu as MuiMenu,
    MenuItem,
    Tooltip,
    Box,
    Avatar,
} from "@mui/material";
import { useState } from "react";
import { useLogout } from "@/queries/Auth";
import { Link as RouterLink } from "react-router-dom";


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
                    <Tooltip title="Select scope to participate">
                        <Avatar />
                    </Tooltip>
                </IconButton>
            </Box>
            <MuiMenu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {},
                }}>
                <MenuItem>
                    <RouterLink style={{ textDecoration: 'none', color: 'black' }} to="/profile">Profile</RouterLink>
                </MenuItem><MenuItem onClick={logout}>
                    Logout
                </MenuItem>
            </MuiMenu>
        </>
    );
};