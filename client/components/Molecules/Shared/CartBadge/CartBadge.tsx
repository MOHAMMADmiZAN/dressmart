import React from 'react';
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../../../Organisms/Cart/Cart';


function CartBadge(): JSX.Element {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        console.log(open)
        console.log('da')
        setOpen(true);
        console.log(open)
    };

    const handleDrawerClose = () => {
        console.log('clse')
        setOpen(false)
        console.log(open)
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