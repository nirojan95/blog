import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box>
          <Link
            to={{
              pathname: '/',
            }}
            underline="none"
          >
            <Typography variant="h6" color="secondary">
              THE HIPPOCRATIC OATS
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
