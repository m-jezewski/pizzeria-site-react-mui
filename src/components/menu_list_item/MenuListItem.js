import { Paper, Select, Typography, MenuItem, InputLabel, Box, FormControl, ListItem } from '@mui/material';
import * as React from 'react';
import PageButton from '../PageButton'
import menuListItemStyles from './menuListItemStyles'

const MenuListItem = ({ item, handleMenuItemSubmit }) => {

    const classes = menuListItemStyles()
    const [choosedVariant, setChoosedVariant] = React.useState(item.variant1)
    const handleSubmit = (e) => {
        e.preventDefault()
        handleMenuItemSubmit({
            id: item.id,
            title: item.title,
            description: item.description,
            imageSrc: item.imageSrc,
            imageAlt: item.imageAlt,
            variant: choosedVariant
        })
    }

    const handleChange = (event) => {
        setChoosedVariant(event.target.value)
    }

    return (
        <ListItem className={classes.conatiner}>
            <Paper className={classes.paperContainer}>
                <Box className={classes.generalInfo}>
                    <img src={item.imageSrc} alt={item.imageAlt} className={classes.productImage} />
                    <Box m={1} ml={2}>
                        <Typography variant='h5'>{item.title}</Typography><br />
                        <Typography variant='subtitle1' color='secondary.light'>{item.description}</Typography>
                    </Box>
                </Box>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <FormControl fullWidth>
                        <InputLabel color='secondary' className={classes.inputLabel}>Size</InputLabel>
                        <Select
                            variant='outlined'
                            className={classes.select}
                            value={choosedVariant}
                            onChange={handleChange}
                            defaultValue={item.variant1}
                            label='Size'
                        >
                            <MenuItem value={item.variant1}>{item.variant1.size} - {item.variant1.price}PLN</MenuItem>
                            {item.variant2 && <MenuItem value={item.variant2}>{item.variant2.size} - {item.variant2.price}PLN</MenuItem>}
                        </Select>
                        <PageButton type='submit' sx={{ m: 0, p: 1 }}>
                            Add to Cart
                        </PageButton>
                    </FormControl>
                </form>
            </Paper>
        </ListItem >
    )
}

export default MenuListItem;