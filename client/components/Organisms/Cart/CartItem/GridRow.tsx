import Grid from '@mui/material/Grid';
import React from 'react';

type AppProps = { children: React.ReactNode }

function GridRow({ children }: AppProps) {
    return (
        <Grid container item justifyContent='space-between' sx={{ padding: '5px 10px', flexWrap: 'nowrap' }} >
            {children}
        </Grid >
    )
}

export default GridRow