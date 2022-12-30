import { styled } from "@mui/material";



export const DrawerHeader = styled('div')(() => ({
    backgroundColor: '#D4AF11',
    height:'30px',
    display: 'flex',
    alignItems: 'center',
}));


export const DrawerStyle = {
    width: 350,
    '& .MuiDrawer-paper': {
        width: 350,
        backgroundColor: 'primary.light',
    },
}