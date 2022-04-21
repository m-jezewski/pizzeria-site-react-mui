import { Container, Typography, Box, TextField, Grid } from '@mui/material'
import PageButton from '../../PageButton'
import React from 'react'
import { useOutletContext } from 'react-router-dom';
import registerPageStyles from './registerPageStyles'

const Register = () => {
    const classes = registerPageStyles()
    const setOpenAlert = useOutletContext().setOpenAlert

    return (
        <Container className={classes.container}>
            <Typography variant='h2' textAlign='center'>Ready to grab our best offer?</Typography>
            <Typography variant="h5" textAlign='center' mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Typography>
            <Box className={classes.formContainer}>
                <form>
                    <Typography variant="h5">Sing up for free account</Typography>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12} md={6}><TextField className={classes.textInput} variant='filled' label='First Name' placeholder="First Name" /></Grid>
                        <Grid item xs={12} md={6}><TextField className={classes.textInput} variant='filled' label='Last Name' placeholder="Last Name" /></Grid>
                        <Grid item xs={12}><TextField className={classes.textInput} variant='filled' label='Email Address' placeholder="Email Address" /></Grid>
                        <Grid item xs={12}><TextField className={classes.textInput} variant='filled' label='Password' placeholder="Password" type='password' /></Grid>
                    </Grid>
                    <PageButton onClick={() => { setOpenAlert(true); }} sx={{ m: 0, mt: 2.5, p: 2, pl: 5, pr: 5 }}>
                        Register
                    </PageButton>
                </form>
            </Box>
        </Container>
    );
}
export default Register;