import { makeStyles } from '@mui/styles'

const footerStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    boxShadow: '0px -2px 4px 4px rgb(0 0 0 / 20%), 0px -2px 5px 4px rgb(0 0 0 / 14%), 0px -2px 10px 4px rgb(0 0 0 / 12%)',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', padding: 0, margin: 0 },
  },

  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

export default footerStyles
