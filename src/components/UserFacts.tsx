import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { UserStatisticsForm } from './UserStatisticsForm';

const UserFacts: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    }; 

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
    <Box display="flex" gap={2} sx={{ mb: 2}}>
      {/* Level Card */}
      <Card variant="outlined" sx={{ minWidth: 100, padding: 1, borderRadius: 10 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold">
            Lvl 3
          </Typography>
          <Box 
            sx={{
              display: 'inline-block',
              paddingX: 1,
              paddingY: 0.5,
              backgroundColor: '#DFF5E0',
              borderRadius: 1,
              mt: 1
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="textSecondary">
              ACTIVE CITIZEN
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Points Card */}
      <Card variant="outlined" sx={{ minWidth: 100, padding: 1, borderRadius: 10 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold">
            400
          </Typography>
          <Box 
            sx={{
              display: 'inline-block',
              paddingX: 1,
              paddingY: 0.5,
              backgroundColor: '#E0ECF7',
              borderRadius: 1,
              mt: 1
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="textSecondary">
              SISU POINTS
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>

    <Typography variant="subtitle1">
          You can upload some demographical data about yourself for statistics
          purposes.
    </Typography>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
          It is entirely optional and the form does not ask for sensitive
          information.
    </Typography>

    <Button color="secondary" variant="contained" onClick={handleClickOpen}>
          Add demographical data
    </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>Add some demographical data about yourself:</DialogTitle>
          <DialogContent
            sx={{ gap: 2, display: "flex", flexDirection: "column" }}
          >
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

export default UserFacts;