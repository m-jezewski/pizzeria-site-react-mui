import { makeStyles } from '@mui/styles'

const navBarStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 1,
    [theme.breakpoints.down('md')]: { justifyContent: 'center', padding: theme.spacing(0.3), margin: 0 },
  },

  buttonContainer: {
    display: 'flex',
    flexDriection: 'row',
    [theme.breakpoints.down('md')]: { width: '100%', justifyContent: 'space-around' },
  },
}))

export default navBarStyles
