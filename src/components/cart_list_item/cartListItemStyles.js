import { makeStyles } from '@mui/styles'

const cartListItemStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(1),
    borderBottom: 'solid 1px',
    borderBottomColor: theme.palette.primary.grey,
    [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
  },

  iconButton: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    '&:hover': { backgroundColor: theme.palette.secondary.light },
  },
}))

export default cartListItemStyles
