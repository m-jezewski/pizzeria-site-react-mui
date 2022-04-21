import { List } from '@mui/material';
import * as React from 'react';
import MenuListItem from '../menu_list_item/MenuListItem'
import menuListStyles from './menuListStyles';

const MenuList = ({ list, handleMenuItemSubmit, value, index }) => {
    const classes = menuListStyles()

    return (
        <List component='div' role='tabpanel' hidden={value !== index} className={[classes.container, 'styled-scrollbars'].join(' ')}>
            {
                list.map(item => (
                    <MenuListItem key={item.id} item={item} handleMenuItemSubmit={handleMenuItemSubmit}></MenuListItem>
                ))
            }
        </List >
    );
}

export default MenuList;