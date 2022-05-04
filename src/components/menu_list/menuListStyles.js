import { makeStyles } from '@mui/styles'

const menuListStyles = makeStyles((theme) => ({
  container: {
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: '500px',
    maxHeight: '63vh',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      overflowY: 'hidden',
      maxHeight: 'none',
    },
  },
}))

export default menuListStyles
