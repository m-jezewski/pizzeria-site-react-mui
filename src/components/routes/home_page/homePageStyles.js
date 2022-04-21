import { makeStyles } from '@mui/styles';
import blackSectionBackground from '../../../assets/blackBackground.png'

const footerStyles = makeStyles((theme) => ({
    frontImage: {
        maxHeight: '50vh',
        width: '100%',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    fullWidthSection: {
        padding: theme.spacing(6),
        color: theme.palette.primary.light,
        backgroundImage: 'URL(' + blackSectionBackground + ')',
        backgroundSize: 'cover',
        minHeight: '45vh',
        display: 'flex',
        gap: theme.spacing(2),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    sideSection: {
        padding: theme.spacing(6),
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },

    sideSectionImage: {
        objectFit: 'cover',
        width: '100%',
        minHeight: '100%',
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    blackDivider: {
        border: 'solid 1px',
        borderColor: theme.palette.primary.main,
        marginTop: '1em',
        width: '55%'
    },

    appStoresImg: {
        minWidth: '150px',
        width: '20%',
        marginTop: '2em',
        cursor: 'pointer',
        objectFit: 'cover',
    }
}));

export default footerStyles