import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Logo from '../logo';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0f1624',
      darker: '#053e85',
    },
  },
});

export default function Navbar() {

  return (

    <ThemeProvider theme={theme}>
    
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, height:"3rem", width:"3rem" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.15rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ODS
          </Typography>

          
        </Toolbar>
      </Container>
    </AppBar>

    </ThemeProvider>
  );
}
