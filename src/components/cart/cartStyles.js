import { makeStyles } from '@mui/styles'

const cartStyles = makeStyles((theme) => ({
  container: {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '6px',
    minHeight: '500px',
    height: '75vh',
    padding: theme.spacing(2),
    minWidth: '19em',
    width: '100%',
    maxWidth: '20vw',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      height: '35vh',
    },
  },

  itemListContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
    marginBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}))

export default cartStyles
