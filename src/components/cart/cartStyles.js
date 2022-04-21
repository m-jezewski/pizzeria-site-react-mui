import { makeStyles } from '@mui/styles';

const cartStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: '6px',
        minHeight: '500px', height: '75vh',
        padding: theme.spacing(2),
        minWidth: '18em', width: '100%', maxWidth: '20vw',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            minHeight: '0px',
            height: '35vh',
            minWidth: '100%',
        }
    },

    itemListContainer: {
        overflowY: 'auto',
        overflowX: 'hidden',
        marginBottom: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }
}))

export default cartStyles