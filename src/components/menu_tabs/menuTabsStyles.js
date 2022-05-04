import { makeStyles } from '@mui/styles'

const menuTabsStyles = makeStyles((theme) => ({
  tabsTitle: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: { display: 'none' },
  },

  tabs: {
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.secondary.dark,
  },
}))

export default menuTabsStyles
