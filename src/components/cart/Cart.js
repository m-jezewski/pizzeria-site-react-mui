import { Stack, List, Typography, Divider, Box, Button } from '@mui/material'
import React from 'react'
import CartListItem from '../cart_list_item/CartListItem'
import { useOutletContext } from 'react-router-dom'
import cartStyles from './cartStyles'

const Cart = ({ cartItemList, removeCartItem }) => {

    const classes = cartStyles()
    const setOpenAlert = useOutletContext().setOpenAlert
    const totalPrice = () => {
        let sum = 0;
        cartItemList.forEach(element => {
            sum += element.variant.price
        });
        return parseFloat(sum).toFixed(2)
    }

    return (
        <Stack className={classes.container}>
            <Box className={['styled-scrollbars', classes.itemListContainer]} >
                <Typography variant='h2'>Cart</Typography>
                <List>
                    {cartItemList.map(item => (
                        <CartListItem key={item.cartID} item={item} removeCartItem={removeCartItem} />
                    ))}
                </List>
            </Box>

            <Box>
                <Divider variant='fullwidth' color='#8E8E8E' flexItem />
                <Typography variant='h3' textAlign='right' mt={1}>
                    {totalPrice()} PLN
                </Typography>
                <Button variant='pageButton' sx={{ m: 0, mt: 1, }} fullWidth onClick={() => { setOpenAlert(true); }} >Order</Button>
            </Box>
        </Stack >
    );
}

export default Cart;