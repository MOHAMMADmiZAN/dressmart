import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { DrawerHeader, DrawerStyle } from './Cart.style';



type AppPros = {
    open: boolean
    handleDrawerClose: any
}

export default function Cart({ open, handleDrawerClose }: AppPros) {

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
                </DrawerHeader>

                {/* { Drawer Body will be here which will render cart Items } */}

            </Drawer>
        </Box >
    );
}