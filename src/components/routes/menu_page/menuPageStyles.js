import { makeStyles } from '@mui/styles'

const registerPageStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    alignSelf: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      padding: 0,
    },
  },

  tabs: {
    flexDirection: 'column',
    paddingRight: theme.spacing(1),
  },

  cartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default registerPageStyles
