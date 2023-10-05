import React from 'react';
import MUIAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const AppBar: React.FC = () => {
  return (<MUIAppBar position="fixed" sx={{ zIndex: 2000 }}>
    <Toolbar sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
      <DashboardIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
      <Typography variant="h6" noWrap component="div">
        App de Usuarios
      </Typography>
    </Toolbar>
  </MUIAppBar>);
}