import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Drawer, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { State, useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { CartType } from '../../../../store/models/CartModel';
import MapItems from '../../../Molecules/MapItems/MapItems';
import CartItem from '../CartItem/CartItem';
import { CheckOutButtonStyle, DrawerHeader, DrawerStyle, HeadTitleStyle } from './Cart.style';
import EmptyCart from './EmptyCart';



type AppPros = {
    open: boolean
    handleDrawerClose: () => void
}

export default function Cart({ open, handleDrawerClose }: AppPros) {

    const { CartItems } = useStoreState((state: State<CartType>) => state.Cart)

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={DrawerStyle}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} >
                        <ChevronRightIcon />
                    </IconButton>
                    <Typography variant='h6' sx={HeadTitleStyle} > Cart</Typography>
                </DrawerHeader>

                {/* Cart items map through MapItems component*/}
                {CartItems.length > 0 ?
                    < MapItems ItemComponent={CartItem} items={CartItems} /> :
                    <EmptyCart />
                }
                <Button fullWidth={true} sx={CheckOutButtonStyle}>Procced To CheckOut</Button>
            </Drawer>
        </Box >
    );
}