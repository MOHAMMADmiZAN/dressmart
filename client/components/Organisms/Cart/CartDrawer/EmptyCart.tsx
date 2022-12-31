import React from 'react'
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function EmptyCart() {
    return (
        <Grid container direction='column' alignItems='center' sx={{ position: 'absolute', top: '35%' }} >
            <Typography variant='h1' > <ProductionQuantityLimitsSharpIcon fontSize='large' sx={{ fontSize: '60px', color: 'primary.main' }} /> </Typography>
            <Typography variant='h5' sx={{ color: 'primary.main' }} > Cart is Empty </Typography>
        </Grid>
    )
}


export default EmptyCart 