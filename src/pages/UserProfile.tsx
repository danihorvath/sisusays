import { useState } from 'react';
import {Box, Button, Typography,Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, } from '@mui/material';
import { UserStatisticsForm } from '@/components/UserStatisticsForm';

/*
interface UserProfileProps {
  username: string;
  level: string;
}*/

const UserProfile /*: React.FC<UserProfileProps>*/ = (/*{username, level}*/) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
          <Typography variant="h4">Hey, 6LJHGR8435JGH54!</Typography>
          <Typography variant="h5" color="textSecondary" sx={{ mb: 5 }}>
            Level: SuperCitizen
          </Typography>
          <Typography variant='subtitle1'>You can upload some demographical data about yourself for statistics purposes.</Typography>
          <Typography variant='subtitle1' sx={{ mb: 2 }}>It is entirely optional and the form does not ask for sensitive information.</Typography>
          <Button color="secondary" variant="contained" onClick={handleClickOpen}>
            Add demographical data
          </Button>
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>Add some demographical data about yourself:</DialogTitle>
            <DialogContent sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
            <UserStatisticsForm />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleClose}>
                Save Data
            </Button>
            </DialogActions>
        </Dialog>
        </Box>
      );
    
};

export default UserProfile;