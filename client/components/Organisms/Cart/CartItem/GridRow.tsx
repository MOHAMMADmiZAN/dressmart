import Grid from '@mui/material/Grid';
import React from 'react';

type AppProps = { children: React.ReactNode }

function GridRow({ children }: AppProps) {
    return (
        <Grid container item justifyContent='space-between' p={`5px 10px`} flexWrap={`nowrap`}  alignItems={`center`}>
            {children}
        </Grid >
    )
}

export default GridRow