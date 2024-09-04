import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import Canvas from './Canvas';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Sidebar />
          <Canvas />
        </Box>
      </Container>
    </DndProvider>
  );
}

export default App;
