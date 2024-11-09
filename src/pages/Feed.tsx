import React, { ReactNode } from 'react';
import { Box, Button,} from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';


const Feed = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '60%', // 60% of the screen width
        maxWidth: '800px', // Optional: Maximum width
        margin: '0 auto', // Centering the box
        padding: '20px', // Some padding inside
        boxSizing: 'border-box',
        '@media (max-width: 768px)': {
          width: '100%', // Full width for small screens
          borderLeft: 0,
          borderRight: 0,
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // Distribute children horizontally
            alignItems: 'center', // Vertically center items
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          {/* Unimportant Button */}
          <Button variant="contained" color="error" startIcon={<ThumbDown />}>
          Unimportant
          </Button>

          {/* Child content in the center */}
          <Box
            sx={{
                flexGrow: 1,
                textAlign: 'center',
                fontSize: '25px',
                maxWidth: '40%',
                overflow: 'hidden',
            }}
          >
            {child}
          </Box>

          {/* Important Button */}
          <Button variant="contained" color="success" endIcon={<ThumbUp />}>
          Important
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Feed;