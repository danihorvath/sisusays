import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import MenuBar from "@/components/ProfileMenuBar";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    return (
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Button 
          variant="text" 
          onClick={() => navigate("/")}
          sx={{ alignSelf: "center", mb: 2 }}
        >
          Back To Main
        </Button>
        <Typography variant="h4" sx={{ mb: 2 }}>Hey, DEMOGR8435JGH54!</Typography>
        <MenuBar></MenuBar>
      </Box>
    );
};

export default UserProfile;
