import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Drawer, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { DrawerHeader, DrawerStyle } from './Cart.style';



type AppPros = {
    open: boolean
    handleDrawerClose: () => void
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