import React from 'react';
import {Badge, Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartBadge(): JSX.Element {
    return (
        <>

            <Button>
                <Badge badgeContent={0} color={`error`} showZero={true}>
                    <ShoppingCartIcon sx={{color: '#D4AF37'}}/>
                </Badge>
            </Button>

        </>
    );
}

export default CartBadge;