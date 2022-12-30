import React from 'react'
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, recentProductArray } from '../../../../api/Product.api';
import Image from 'next/image';
import { CartItemStyle } from './CartItem.style';
import GridRow from './GridRow';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



type AppProps = {
    item: {
        name: string,
        model: string,
        thumbnail: string,

    }
}

function CartItem({ item }: AppProps) {




    return (
        <Grid container sx={CartItemStyle} direction="column" >
            <GridRow>
                <Grid
                    item
                    sx={{ maxWidth: '70%' }}
                    direction='column'
                    justifyContent="flex-start" >

                    <Typography variant='h6'> {item.name}</Typography> <Typography variant='caption' >{item.model}</Typography>

                </Grid>

                <Grid item >
                    <Image height={70} width={70} src={item.thumbnail} alt='thumbnail' />
                </Grid >

            </GridRow>

            <Divider />

            <GridRow>
                <Grid item>
                    price:
                </Grid>
                <Grid item>
                    7515 /=
                </Grid>
            </GridRow>

            <Divider />

            <GridRow>

                <Grid item>
                    quantity:
                </Grid>

                <Grid item>
                    <Button sx={{ padding: '0px' }} >-</Button>
                    2
                    <Button sx={{ padding: '0px' }} size='small'>+</Button> <Button sx={{ padding: '0px' }} size='small'><DeleteForeverIcon sx={{ color: 'red' }} /> </Button>
                </Grid>

            </GridRow >

            <Divider />

            <GridRow>

                <Grid item>
                    SubTotal :
                </Grid>

                <Grid item>
                    8500 /=
                </Grid>

            </GridRow>
        </Grid >
    )
}

export default CartItem