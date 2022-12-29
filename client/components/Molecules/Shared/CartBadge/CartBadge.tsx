import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge, Button} from "@mui/material";
import React, {memo, useState} from 'react';
import Cart from '../../../Organisms/Cart/CartDrawer/Cart';
import {GlobalCartStyle} from "./CartBadge.style";


interface cardBadgeProps {
    styles?: object,
    isGlobalCart?: boolean
}

function CartBadge(cardBadgeProps: cardBadgeProps): JSX.Element {
    const {styles, isGlobalCart} = cardBadgeProps;

    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Button onClick={handleDrawerOpen} sx={isGlobalCart ? GlobalCartStyle : {}}>
                <Badge badgeContent={0} color={`error`} showZero={true}>
                    <ShoppingCartIcon sx={{color: 'primary.main', ...styles}}/>
                </Badge>
            </Button>
            <Cart handleDrawerClose={handleDrawerClose} open={open}/>

        </>
    );
}

export default memo(CartBadge);