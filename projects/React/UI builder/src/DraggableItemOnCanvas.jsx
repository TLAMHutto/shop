import React from 'react';
import { useDrag } from 'react-dnd';
import { Box, Typography } from '@mui/material';

const DraggableItemOnCanvas = ({ id, left, top }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        position: 'absolute',
        left: left,
        top: top,
        p: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Typography variant="body1">
        {id === 'button' ? 'Button' : 'Text Field'}
      </Typography>
    </Box>
  );
};

export default DraggableItemOnCanvas;
