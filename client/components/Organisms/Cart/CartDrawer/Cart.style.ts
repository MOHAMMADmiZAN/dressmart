import { styled } from "@mui/material";

export const DrawerStyle = {
    width: 400,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 400,
    },
}


export const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}));