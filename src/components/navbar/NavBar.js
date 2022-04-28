import { AppBar, Toolbar, Box, ClickAwayListener } from '@mui/material/';
import Logo from '../Logo'
import NavButton from './NavButton'
import React from 'react';
import navBarStyles from './navBarStyles';

const NavBar = ({ handleContactButtonCLick }) => {
    const classes = navBarStyles()

    return (
        <AppBar position='sticky'>
            <Toolbar className={classes.toolbar}>
                <Logo />
                <Box className={classes.buttonContainer}>
                    <NavButton path='/' buttonVariant='text'>Home</NavButton>
                    <NavButton path='Menu' buttonVariant='text'>Menu</NavButton>
                    <NavButton path='#' onClick={handleContactButtonCLick}>Contact</NavButton>
                    <NavButton path='Register' buttonVariant='contained' buttonSx={{ backgroundColor: 'primary.light', color: 'primary.dark', '&:hover': { backgroundColor: 'secondary.light' } }}>Register</NavButton>
                </Box>
            </Toolbar>
        </AppBar >
    );
}

export default NavBar;