import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';

interface Activity {
  emoji: string;
  description: string;
}

const activities: Activity[] = [
  { emoji: '🌱', description: 'Contributed to environmental policy' },
  { emoji: '🤝', description: 'Earned Consensus Builder badge' },
  { emoji: '🛠️', description: 'Developed a plan to renovate the city park' },
  { emoji: '🏅', description: '3-year active participation in local community' },
  { emoji: '📝', description: 'Authored an op-ed for local newspaper' },
];

const UserActivities: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Recent Activities</Typography>
      <Stack spacing={1}>
        {activities.map((activity, index) => (
         <React.Fragment key={index}>
         <Box display="flex" alignItems="center">
           <Typography variant="h6" component="span" sx={{ mr: 1 }}>
             {activity.emoji}
           </Typography>
           <Typography variant="body1">{activity.description}</Typography>
         </Box>
         {index < activities.length - 1 && <Divider />}
        </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default UserActivities;
