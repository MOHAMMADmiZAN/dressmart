import { styled } from "@mui/material";



export const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}));


export const DrawerStyle = {
    width: 350,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 350,
    },
}