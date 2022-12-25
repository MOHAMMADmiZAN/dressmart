import React from 'react';
import {Badge, Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartBadge(): JSX.Element  {
    return (
        <>
        <Badge badgeContent={0} >
           <Button>
               <ShoppingCartIcon sx={{color:'#D4AF37'}}/>
           </Button>
        </Badge>
        </>
    );
}

export default CartBadge;