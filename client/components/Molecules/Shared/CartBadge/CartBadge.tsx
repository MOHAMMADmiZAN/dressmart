import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button } from "@mui/material";
import React from 'react';
import Cart from '../../../Organisms/Cart/CartDrawer/Cart';


function CartBadge(): JSX.Element {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Button onClick={handleDrawerOpen}>
                <Badge badgeContent={0} color={`error`} showZero={true}>
                    <ShoppingCartIcon sx={{ color: '#D4AF37' }} />
                </Badge>

            </Button>
            <Cart handleDrawerClose={handleDrawerClose} open={open} />

        </>
    );
}

export default CartBadge;