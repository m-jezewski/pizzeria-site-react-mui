import { Typography, IconButton, ListItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import cartListItemStyles from './cartListItemStyles';


const CartListItem = ({ item, removeCartItem }) => {
    const classes = cartListItemStyles()

    return (
        <>
            <ListItem className={classes.container}>
                <IconButton
                    className={classes.iconButton}
                    aria-label='delete'
                    onClick={() => { removeCartItem(item.cartID) }}
                >
                    <DeleteIcon fontSize='inherit' />
                </IconButton>
                <Typography variant='subtitle2'>{item.title}</Typography>
                <Typography variant='subtitle2'>{item.variant.size}</Typography>
                <Typography variant='subtitle1'>{item.variant.price} PLN</Typography>
            </ListItem>
        </>
    );
}

export default CartListItem;