import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Box, Paper, Typography } from '@mui/material';
import { ItemType } from './DraggableItem';
import DraggableItemOnCanvas from './DraggableItemOnCanvas';
import './styles.css'; // Import your global stylesheet

const Canvas = () => {
  const [items, setItems] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const x = offset.x - (canvasRef.current.getBoundingClientRect().left + 10); // Adjust the x position
      const y = offset.y - (canvasRef.current.getBoundingClientRect().top + 10);  // Adjust the y position
      
      // Update existing item or add new item
      setItems((prevItems) => {
        const existingItem = prevItems.find((i) => i.id === item.id);
        if (existingItem) {
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, left: x, top: y } : i
          );
        }
        return [...prevItems, { id: item.id, left: x, top: y }];
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const canvasRef = React.useRef(null);

  return (
    <Box
      ref={(node) => {
        drop(node);
        canvasRef.current = node;
      }}
      className="canvas" // Apply the global class
      sx={{
        width: '80vw',
        p: 2,
        bgcolor: 'background.default',
        borderLeft: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'auto',
      }}
    >
      <Paper sx={{ p: 2, width: '100%', height: '100%', position: 'relative' }}>
        {items.map((item, index) => (
          <DraggableItemOnCanvas
            key={item.id}
            id={item.id}
            left={item.left}
            top={item.top}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default Canvas;
