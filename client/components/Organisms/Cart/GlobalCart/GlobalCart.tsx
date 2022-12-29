import { Box } from '@mui/material'
import React from 'react'
import { BoxStyle } from './GlobalCart.style';

function GlobalCart() {

    const [open, setOpen] = React.useState(false);

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