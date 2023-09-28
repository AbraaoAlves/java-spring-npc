
import MUIAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';

export function AppBar(){
  return (<MUIAppBar position="fixed" sx={{ zIndex: 2000 }}>
  <Toolbar sx={{ backgroundColor: 'background.paper' }}>
    <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
    <Typography variant="h6" noWrap component="div" color="black">
      App de Usuários
    </Typography>
  </Toolbar>
</MUIAppBar>);
}