import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

const UserBadges: React.FC = () => {

  const badges = ["🇫🇮", "🤝", "🌱", "🏆"];

  return (
    <Box sx={{ padding: 2, backgroundColor: '#ffffff', borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6" fontWeight="bold">Your Badges</Typography>
        <Button variant="text" size="small" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#555' }}>
          See All
        </Button>
      </Box>

      <Box display="flex" alignItems="center" gap={1} sx={{ backgroundColor: '#ffffff' }}>
        {badges.map((badge, index) => (
          <Avatar key={index} sx={{ width: 65, height: 65, fontSize: 30, backgroundColor: '#deebfa' }}>
            {badge}
          </Avatar>
        ))}
      </Box>
    </Box>
  );
};

export default UserBadges;
