import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Logo from './logo';
import ButtonGroup from '@mui/material/ButtonGroup'
import { Link, animateScroll as scroll } from "react-scroll";
// import { CssBaseline } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{
      flexGrow: 1,
    }}>
      {/* <CssBaseline /> */}
      <AppBar
        sx={{
          position: 'fixed',
        }}
      >
        <Toolbar>
          <Logo
            href="#home"
            // marginBottom="64px"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </Logo>

          <Container style={{ textAlign: 'right' }}>
            <Button href="#about" color="inherit">About</Button>
            <Button href="#projects" color="inherit">Projects</Button>
            <Button href="#contact" color="inherit">Contact</Button>
            <Button
              href={require('./assets/Stephen-Clemmer-Resume 1_6_23.pdf')}
              target='_blank'
              color="inherit"

            >Resume</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}