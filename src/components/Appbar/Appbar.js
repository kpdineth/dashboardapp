import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import './style.css'
export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: '#84B945' }} position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Link className='btn_top' to={'/'}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link className='btn_top' to={'/signup'}>
            <Button color="inherit">Sign up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
