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

    typography: {
        fontFamily: '"Montserrat", "Mea Culpa"',
    },
});

theme = createTheme(theme, {
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'pageButton' },
                    style: {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.dark,
                        margin: theme.spacing(2),
                        padding: theme.spacing(2),
                        paddingLeft: theme.spacing(4),
                        paddingRight: theme.spacing(4),
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.light
                        }
                    }
                },
            ]
        }
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