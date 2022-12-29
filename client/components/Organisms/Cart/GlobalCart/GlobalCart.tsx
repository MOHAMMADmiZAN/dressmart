import { Box, Drawer } from '@mui/material'
import React from 'react'
import { BoxStyle, CartIconStyle } from './GlobalCart.style';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../CartDrawer/Cart';

function GlobalCart() {

    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Box sx={BoxStyle} onClick={handleDrawerOpen}>
                <ShoppingCartIcon fontSize='large' sx={CartIconStyle} />
            </Box>
            <Cart handleDrawerClose={handleDrawerClose} open={open} />
        </>
    )
}

export default GlobalCart