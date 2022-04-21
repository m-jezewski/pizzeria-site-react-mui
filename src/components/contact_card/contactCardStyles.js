import { makeStyles } from '@mui/styles';

const contactCardStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        position: 'fixed',
        padding: theme.spacing(1),
        right: '4.5em',
        zIndex: '10000',
        top: '62px',
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.down('md')]: { width: '100%', right: '0', top: '56px', justifyContent: 'center' },
    },
}));

export default contactCardStyles