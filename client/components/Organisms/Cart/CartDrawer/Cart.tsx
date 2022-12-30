import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Drawer, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { DrawerHeader, DrawerStyle } from './Cart.style';
import CartItem from '../CartItem/CartItem';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, recentProductArray } from '../../../../api/Product.api';
import MapItems from '../../../Molecules/MapItems/MapItems';



type AppPros = {
    open: boolean
    handleDrawerClose: () => void
}

export default function Cart({ open, handleDrawerClose }: AppPros) {

    const { data, isLoading, isError, error } = useQuery<recentProductArray, Error>(["recentProducts"], fetchProducts);




    if (!data) {
        return <div>Loading</div>
    }

    return (
        <Box sx={{ display: 'flex', }}>
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
                </DrawerHeader>

                {/* { Drawer Body will be here which will render cart Items } */}
                <MapItems ItemComponent={CartItem} items={data} />
                {/* <CartItem /> */}
            </Drawer>


        </Box >
    );
}