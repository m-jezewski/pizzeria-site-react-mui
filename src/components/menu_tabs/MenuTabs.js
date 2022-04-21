import { Typography, Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import MenuList from "../menu_list/MenuList";
import React from 'react'
import menuData from '../../menu_data'
import menuTabsStyles from './menuTabsStyles'

const MenuTabs = ({ handleMenuItemSubmit }) => {

    const classes = menuTabsStyles()
    const theme = useTheme();
    const smQuery = useMediaQuery(theme.breakpoints.down('sm'));
    const mdQuery = useMediaQuery(theme.breakpoints.down('md'));
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };


    return (
        <>
            <Typography variant='h2' className={classes.tabsTitle}>MENU</Typography>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor='secondary'
                textColor='inherit'
                aria-label='Menu'
                orientation={smQuery === true ? 'vertical' : 'horizontal'}
                variant={mdQuery === true ? 'fullWidth' : 'standard'}
                className={classes.tabs}
            >
                <Tab value={0} label='Pizza' />
                <Tab value={1} label='Drinks' />
                <Tab value={2} label='Burgers' />
            </Tabs>
            <MenuList list={menuData.pizzaList} handleMenuItemSubmit={handleMenuItemSubmit} value={tabValue} index={0} />
            <MenuList list={menuData.drinkList} handleMenuItemSubmit={handleMenuItemSubmit} value={tabValue} index={1} />
            <MenuList list={menuData.burgerList} handleMenuItemSubmit={handleMenuItemSubmit} value={tabValue} index={2} />
        </>
    );
}

export default MenuTabs;