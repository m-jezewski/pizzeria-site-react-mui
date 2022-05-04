import { Box, Typography } from '@mui/material'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import footerStyles from './footerStyles.js'

const Footer = ({ setOpenAlert }) => {
  const classes = footerStyles()

  const handleClick = (e) => {
    e.preventDefault()
    setOpenAlert(true)
  }

  return (
    <Box className={classes.container}>
      <Logo />
      <Typography variant='body1'>Lorem ipsum 24-12 Mozarella</Typography>
      <Typography variant='body1'>+XX XXX XXX XXX</Typography>
      <Link
        to='#'
        className={classes.link}
        onClick={(e) => {
          handleClick(e)
        }}
      >
        <Typography variant='body1'>Mobile App</Typography>
      </Link>
      <a href='https://github.com/Karriuz' className={classes.link}>
        <Typography color='#BBBBBB' variant='body1'>
          Github
        </Typography>
      </a>
    </Box>
  )
}

export default Footer
