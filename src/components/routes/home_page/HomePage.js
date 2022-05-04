import { Box, Typography, Divider, Grid, Button } from '@mui/material/'
import homeImage from '../../../assets/homePage1-full.webp'
import homeImage1920 from '../../../assets/homePage1-1920.webp'
import homeImage1366 from '../../../assets/homePage1-1366.webp'
import homeImage900 from '../../../assets/homePage1-900.webp'
import pizzaItemFull from '../../../assets/pizzaItem.webp'
import pizzaItem1366 from '../../../assets/pizzaItem-1336.webp'
import pizzaItem900 from '../../../assets/pizzaItem-900.webp'

import lastSection600 from '../../../assets/homePage2.webp'
import lastSection1366 from '../../../assets/homePage2-1366.webp'
import lastSection1920 from '../../../assets/homePage2-1920.webp'
import appstoreImg from '../../../assets/appstore.webp'
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
        <picture>
          <source srcSet={homeImage} media='(min-width: 2500px)'></source>
          <source srcSet={homeImage1920} media='(min-width: 1920px)'></source>
          <source srcSet={homeImage1366} media='(min-width: 1366px)'></source>
          <source srcSet={homeImage900} media='(min-width: 900px)'></source>
          <img src={homeImage900} alt='pizza' className={classes.frontImage} />
        </picture>
      </Grid>
      <Grid className={classes.fullWidthSection} component='section' item xs={12}>
        <Typography variant='h1' fontWeight={100} fontFamily='Mea Culpa'>
          Luigi's Pizza
        </Typography>
        <Typography variant='h2' fontFamily='Mea Culpa'>
          Your little Italy
        </Typography>
      </Grid>
      <Grid component='section' item xs={12} md={6}>
        <picture>
          <source srcSet={pizzaItemFull} media='(min-width: 1920px)'></source>
          <source srcSet={pizzaItem1366} media='(min-width: 1366px)'></source>
          <source srcSet={pizzaItem900} media='(min-width: 900px)'></source>
          <img className={classes.sideSectionImage} src={pizzaItem900} alt='Pizza' />
        </picture>
      </Grid>
      <Grid className={classes.sideSection} component='section' item xs={12} md={6}>
        <Typography variant='h1' fontWeight='500'>
          -50%!
        </Typography>
        <Typography variant='h3'>Capprichiosa week</Typography>
        <Divider className={classes.blackDivider} />
        <Typography variant='h6' color='secondary.light' mt={4}>
          Capprichiosa is the target of our weekly discount!
        </Typography>
        <Typography variant='subtitle1' color='secondary.light' mt={1}>
          cheese, tomato pizza sauce, ham, mushrooms, oregano
        </Typography>
        <Typography variant='body1' color='secondary.grey' mt={5}>
          *Promotional product changes every monday at 08:00 PM
        </Typography>
      </Grid>
      <Grid className={classes.fullWidthSection} component='section' item xs={12}>
        <Typography variant='h3'>About us</Typography>
        <Typography variant='subtitle1' sx={{ maxWidth: '60em' }}>
          Pizza ipsum dolor amet mozzarella thin crust garlic NY style ham hawaiian. Fresh tomatoes chicken party sauteed onions
          hawaiian, peppers pan pepperoni. Chicken wing green bell peppers thin crust, string cheese buffalo sauce red onions
          meatball hawaiian broccoli parmesan party pesto pan.
        </Typography>
        <Box>
          <Button variant='pageButton' onClick={handleContactButtonCLick}>
            Contact
          </Button>
          <NavButton pageButton path='/Menu'>
            Menu
          </NavButton>
        </Box>
      </Grid>
      <Grid className={classes.sideSection} component='section' item xs={12} md={6}>
        <Typography variant='h1' fontWeight='500'>
          Download
        </Typography>
        <Typography variant='h3'>our App</Typography>
        <Divider className={classes.blackDivider} />
        <Typography variant='h6' color='secondary.light' mt={4}>
          Collect our loyalty points and get access to new discounts!
        </Typography>
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault()
            setOpenAlert(true)
          }}
        >
          <img src={appstoreImg} className={classes.appStoresImg} alt='Appstores' />{' '}
        </a>
      </Grid>
      <Grid item xs={12} md={6}>
        <picture>
          <source srcSet={lastSection1920} media='(min-width: 1920px)'></source>
          <source srcSet={lastSection1366} media='(min-width: 1366px)'></source>
          <source srcSet={lastSection600} media='(min-width: 900px)'></source>
          <img className={classes.sideSectionImage} src={lastSection600} alt='Pizza' />
        </picture>
      </Grid>
    </Grid>
  )
}

export default Main
