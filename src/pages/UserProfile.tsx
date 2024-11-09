import {
  Box,
  Typography,
} from "@mui/material";
import MenuBar from "@/components/ProfileMenuBar";

const UserProfile = () => {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Typography variant="h4" sx={{ mb: 2 }}>Hey, DEMOGR8435JGH54!</Typography>
        <MenuBar></MenuBar>
      </Box>
    );
};

export default UserProfile;
