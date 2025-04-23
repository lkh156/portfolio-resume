// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';

// this must be exactly “Navbar”
const Navbar = () => {
  // use theme.mixins.toolbar only if you’re injecting MUI’s theme  
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={RouterLink} to="/resume">Resume</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Navbar;
