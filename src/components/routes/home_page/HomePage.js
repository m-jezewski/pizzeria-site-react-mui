import { Box, Typography, Divider, Grid } from '@mui/material/'
import PageButton from '../../PageButton'
import homeImage from '../../../assets/homePizza.jpg'
import pizzaItem from '../../../assets/pizzaItem.jpg'
import homeImage2 from '../../../assets/homePizza-2.jpg'
import appstoreImg from '../../../assets/appstore.png'
import NavButton from '../../navbar/NavButton.js'
import { useOutletContext } from 'react-router-dom'
import homePageStyles from './homePageStyles'

const Main = () => {
    const classes = homePageStyles()
    const setOpenAlert = useOutletContext().setOpenAlert
    const handleContactButtonCLick = useOutletContext().handleContactButtonCLick

    return (
        <Grid container spacing={0}>
            <Grid component='section' item xs={12}>
                <img src={homeImage} alt='pizza' className={classes.frontImage} />
            </Grid>
            <Grid className={classes.fullWidthSection} component='section' item xs={12}>
                <Typography variant='h1' fontWeight={100} fontFamily='Mea Culpa'>Luigi's Pizza</Typography>
                <Typography variant='h2' fontFamily='Mea Culpa'>Your little Italy</Typography>
            </Grid>
            <Grid component='section' item xs={12} md={6}>
                <img className={classes.sideSectionImage} src={pizzaItem} alt='Pizza' />
            </Grid>
            <Grid className={classes.sideSection} component='section' item xs={12} md={6}>
                <Typography variant='h1' fontWeight='500' >-50%!</Typography>
                <Typography variant='h3'>Capprichiosa week</Typography>
                <Divider className={classes.blackDivider} />
                <Typography variant='h6' color='secondary.light' mt={4}>Capprichiosa is the target of our weekly discount!</Typography>
                <Typography variant='subtitle1' color='secondary.light' mt={1}>cheese, tomato pizza sauce, ham, mushrooms, oregano</Typography>
                <Typography variant='body1' color='secondary.grey' mt={5}>*Promotional product changes every monday at 08:00 PM</Typography>
            </Grid>
            <Grid className={classes.fullWidthSection} component='section' item xs={12}>
                <Typography variant='h3'>About us</Typography>
                <Typography variant='subtitle1' sx={{ maxWidth: '60em' }}>Pizza ipsum dolor amet mozzarella thin crust garlic NY style ham hawaiian. Fresh tomatoes chicken party sauteed onions hawaiian, peppers pan pepperoni. Chicken wing green bell peppers thin crust, string cheese buffalo sauce red onions meatball hawaiian broccoli parmesan party pesto pan.</Typography>
                <Box>
                    <PageButton onClick={handleContactButtonCLick}>Contact</PageButton>
                    <NavButton pageButton path='/Menu'>Menu</NavButton>
                </Box>
            </Grid>
            <Grid className={classes.sideSection} component='section' item xs={12} md={6}>
                <Typography variant='h1' fontWeight='500'>Download</Typography>
                <Typography variant='h3'>our App</Typography>
                <Divider className={classes.blackDivider} />
                <Typography variant='h6' color='secondary.light' mt={4}>Collect our loyalty points and get access to new discounts!</Typography>
                <img src={appstoreImg} className={classes.appStoresImg} alt='Appstores icons' onClick={() => { setOpenAlert(true) }} />
            </Grid>
            <Grid item xs={12} md={6}>
                <img className={classes.sideSectionImage} src={homeImage2} alt='Pizza' />
            </Grid>
        </Grid >
    );
}

export default Main;