import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
    palette: {
        primary: {
            main: '#111111',
            light: '#E8E8E8',
            dark: '#111111'
        },
        secondary: {
            main: '#E8E8E8',
            light: '#BBBBBB',
            grey: '#8E8E8E',
            dark: '#202020',
        },
    },

    components: {

    },

    typography: {
        fontFamily: '"Montserrat", "Mea Culpa"',
    },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    fontFamily: 'Montserrat',
    [theme.breakpoints.up('xl')]: {
        fontSize: '6rem',
    },
    [theme.breakpoints.down('xl')]: {
        fontSize: '6rem',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '4.5rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '3.2rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
    },
}

export default theme