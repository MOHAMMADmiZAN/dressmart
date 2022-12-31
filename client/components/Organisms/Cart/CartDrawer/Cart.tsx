import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Drawer, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { CheckOutButtonStyle, DrawerHeader, DrawerStyle, HeadTitleStyle } from './Cart.style';
import CartItem from '../CartItem/CartItem';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, recentProductArray } from '../../../../api/Product.api';
import MapItems from '../../../Molecules/MapItems/MapItems';
import EmptyCart from './EmptyCart';



type AppPros = {
    open: boolean
    handleDrawerClose: () => void
}

export default function Cart({ open, handleDrawerClose }: AppPros) {

    // Temporarily recent products data used here , After cart store connection cart store data will be here
    const { data, isLoading, isError, error } = useQuery<recentProductArray, Error>(["recentProducts"], fetchProducts);


    if (isLoading || !data) {
        return <div>Loading</div>
    }

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
                {data.length > 0 ?
                    < MapItems ItemComponent={CartItem} items={data} /> :
                    <EmptyCart />
                }

                <Button fullWidth={true} sx={CheckOutButtonStyle}>Procced To CheckOut</Button>
            </Drawer>


        </Box >
    );
}