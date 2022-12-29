import { Box } from '@mui/material'
import React from 'react'
import { BoxStyle } from './GlobalCart.style';
import { useState } from 'react';


function GlobalCart() {

    const [open, setOpen] = useState<Boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    return (
        <Box sx={BoxStyle} onClick={handleDrawerClose}>GlobalCart</Box>
    )
}

export default GlobalCart