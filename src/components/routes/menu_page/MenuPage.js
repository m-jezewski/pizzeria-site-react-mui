import { Grid } from '@mui/material'
import * as React from 'react';
import Cart from '../../cart/Cart'
import MenuTabs from '../../menu_tabs/MenuTabs'
import menuPageStyles from './menuPageStyles'

let cartCounter = 0

const Menu = () => {
    const classes = menuPageStyles()
    const [cartItemList, setCartItemList] = React.useState([])

    const handleMenuItemSubmit = (item) => {
        setCartItemList([...cartItemList, { ...item, cartID: cartCounter }])
        cartCounter++
    }

    const removeCartItem = (itemID) => {
        setCartItemList(cartItemList.filter(item => item.cartID !== itemID))
    }

    return (
        <Grid
            container
            component='section'
            columnSpacing={10}
            rowSpacing={4}
            className={classes.container}
        >
            <Grid item xs={12} md={8} className={classes.tabs}>
                <MenuTabs handleMenuItemSubmit={handleMenuItemSubmit} />
            </Grid>
            <Grid item xs={12} md={4} className={classes.cartContainer}>
                <Cart cartItemList={cartItemList} removeCartItem={removeCartItem} />
            </Grid>
        </Grid >
    );
}

export default Menu;