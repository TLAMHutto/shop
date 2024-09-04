import React from 'react';
import { useDrag } from 'react-dnd';
import { Box, Typography } from '@mui/material';

export const ItemType = 'COMPONENT'; // Export ItemType

const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        p: 2,
        mb: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'move',
      }}
    >
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

export default DraggableItem;
