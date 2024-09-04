import React from 'react';
import { Box, Typography } from '@mui/material';
import DraggableItem from './DraggableItem';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '20vw',
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        p: 2,
        boxSizing: 'border-box'
      }}
    >
      <Typography variant="h6">Components</Typography>
      <DraggableItem id="button" text="Button" />
      <DraggableItem id="textfield" text="Text Field" />
      {/* Add more draggable items as needed */}
    </Box>
  );
};

export default Sidebar;
