import { Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ContactCard from './components/contact_card/ContactCard'
import { Outlet } from 'react-router-dom'
import './index.css'
import SnackbarAlert from './components/SnackbarAlert'
import theme from './theme.js'

const App = () => {
  const [openContactCard, setOpenContactCard] = React.useState(false)
  const [openAlert, setOpenAlert] = React.useState(false)

  const handleContactButtonCLick = () => {
    setTimeout(() => {
      setOpenContactCard((prev) => !prev)
    }, 0)
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={0} sx={{ minHeight: '100vh', justifyContent: 'space-between', minWidth: '300px', overflowX: 'unset' }}>
        <ContactCard openContactCard={openContactCard} setOpenContactCard={setOpenContactCard} />
        <SnackbarAlert openAlert={openAlert} setOpenAlert={setOpenAlert} />
        <NavBar handleContactButtonCLick={handleContactButtonCLick}></NavBar>
        <Outlet context={{ handleContactButtonCLick, openAlert, setOpenAlert }}></Outlet>
        <Footer setOpenAlert={setOpenAlert}></Footer>
      </Stack>
    </ThemeProvider>
  )
}

export default App
