import React from 'react';
import {Badge, Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartBadge(): JSX.Element {
    return (
        <>

            <Button>
                <Badge badgeContent={1} color="error">
                    <ShoppingCartIcon sx={{color: '#D4AF37'}}/>
                </Badge>
            </Button>

        </>
    );
}

export default CartBadge;