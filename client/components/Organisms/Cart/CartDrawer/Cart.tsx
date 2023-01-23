import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Drawer, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MapItems from '../../../Molecules/MapItems/MapItems';
import CartItem from '../CartItem/CartItem';
import { CheckOutButtonStyle, DrawerHeader, DrawerStyle, HeadTitleStyle } from './Cart.style';
import EmptyCart from './EmptyCart';
import NextLink from "next/link";
import { useCartItem } from "../../../../hooks/useCartItem";
import Grid from '@mui/material/Grid';


type AppPros = {
    open: boolean
    handleDrawerClose: () => void
}

export default function Cart({ open, handleDrawerClose }: AppPros) {
    const { items } = useCartItem()

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={DrawerStyle}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                    <Typography variant='h6' sx={HeadTitleStyle}> Cart</Typography>
                </DrawerHeader>

                {/* Cart items map through MapItems component*/}
                <Grid sx={{ overflow: 'auto' }}>
                    {items.length > 0 ?
                        < MapItems ItemComponent={CartItem} items={items} /> :
                        <EmptyCart />
                    }
                </Grid>
                <NextLink href={`/checkout`} onClick={handleDrawerClose}><Button fullWidth={true} sx={CheckOutButtonStyle}>Proceed To CheckOut</Button></NextLink>

            </Drawer >
        </Box >
    );
}