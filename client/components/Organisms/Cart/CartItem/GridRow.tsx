import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image';

type AppProps = { children: React.ReactNode }

function GridRow({ children }: AppProps) {
    return (
        <Grid container item justifyContent='space-between' sx={{ padding: '5px 10px' }} >
            {children}
        </Grid>
    )
}

export default GridRow