import { Snackbar, Alert } from '@mui/material'
import React from 'react'

const SnackbarAlert = ({ openAlert, setOpenAlert }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
  }

  return (
    <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='warning'>
        Sorry! This is not the part of this demo.
      </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert
