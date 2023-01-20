import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#D4AF11',
            light: '#F5E8A3',
            dark: '#A37F00',
            contrastText: '#000000'
        }

    },
    typography: {
        fontFamily: 'Rajdhani, sans-serif',
        h1:{
            fontSize: '2.5rem',
            fontWeight: 600,
            textTransform: 'capitalize',
        },
        h2:{
            fontSize: '2rem',
            fontWeight: 600,
            textTransform: 'capitalize',
        },
        h3:{
            fontSize: '1.5rem',
            fontWeight: 600,
            textTransform: 'capitalize',
        },
        h4:{
            fontSize: '1.25rem',
            fontWeight: 600,
            textTransform: 'capitalize',
        },
        h5:{
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'capitalize',
        },
        h6:{
            fontSize: '0.875rem',
            textTransform: 'capitalize',
        },
        body1:{
            fontSize: '1rem',
        },
        body2:{
            fontSize: '0.875rem',
        },
        subtitle1:{
            fontSize: '0.875rem',
        },
        subtitle2:{
            fontSize: '0.75rem',
        },
        button:{
            fontSize: '0.875rem',
        },
        caption:{
            fontSize: '0.75rem',
        },
        overline:{
            fontSize: '0.75rem',
        },


    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D4AF11',
                }
            }
        }
    }

});
