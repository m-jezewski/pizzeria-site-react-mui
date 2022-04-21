import { makeStyles } from '@mui/styles';

const menuListItemStyles = makeStyles((theme) => ({
    container: {
        padding: '0px',
        paddingRight: theme.spacing(2)
    },

    paperContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.secondary.dark,
        color: 'inherit',
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            rowGap: '2em',
        }
    },

    generalInfo: {
        display: 'flex',
        minWidth: '17em',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }
    },

    productImage: {
        minWidth: '110px',
        width: '15%',
        objectFit: 'contain'
    },

    form: {
        minWidth: '10em',
        width: '100%'
    },

    inputLabel: {
        color: theme.palette.primary.light,
    },

    select: {
        color: 'inherit',
        width: '100%',
        mb: theme.spacing(1.5),
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
}))

export default menuListItemStyles