import { makeStyles } from '@mui/styles';

const cartListItemStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: { flexDirection: 'column' }
    },

    iconButton: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        '&:hover': { backgroundColor: theme.palette.secondary.light }
    },

    divider: {
        borderColor: theme.palette.primary.grey
    }

}))

export default cartListItemStyles