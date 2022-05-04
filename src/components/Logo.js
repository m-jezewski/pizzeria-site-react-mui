import { Box, Typography } from '@mui/material'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' label='Logo, link to home page' style={{ textDecoration: 'none' }}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          color: 'primary.light',
          fontFamily: 'Mea Culpa',
          [theme.breakpoints.down('sm')]: { display: 'none' },
        })}
      >
        <LocalPizzaIcon fontSize='large' label='Pizza Slice'></LocalPizzaIcon>
        <Typography variant='h5' fontFamily='inherit'>
          Luigi's Pizza
        </Typography>
      </Box>
    </Link>
  )
}

export default Logo
