import { styled } from "@mui/material";



export const DrawerHeader = styled('div')(() => ({
    backgroundColor: '#D4AF11',
    height:'40px',
    display: 'flex',
    alignItems: 'center',
}));

export const HeadTitleStyle = {
    marginLeft: '110px',
    color:'white'
}


export const DrawerStyle = {
    width: 350,
    '& .MuiDrawer-paper': {
        width: 350,
        backgroundColor: 'primary.light',
        border:'0px',
    },
}


export const CheckOutButtonStyle = {
    backgroundColor: 'primary.main',
    color: 'white',
    maxWidth: '350px',
    borderRadius:'0px',
    position: 'fixed',
    bottom:'0px',
    '&:hover': {
        backgroundColor: 'primary.dark',
    }
}