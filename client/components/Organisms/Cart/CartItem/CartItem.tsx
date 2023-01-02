import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Actions, useStoreActions } from 'easy-peasy';
import Image from 'next/image';
import React, { memo } from 'react';
import { CartType, ProductPayload } from '../../../../store/models/CartModel';
import { CartItemStyle } from './CartItem.style';
import GridRow from './GridRow';




type CartItemProps = React.PropsWithChildren<{
    item: ProductPayload
}>

function CartItem({ item }: CartItemProps): JSX.Element {

    const { AddProduct, decrementProductQuantity, RemoveProduct } = useStoreActions((actions: Actions<CartType>) => actions.Cart);


    const handleIncrease = () => {
        AddProduct(item)
    }

    const handleDecrease = () => {
        decrementProductQuantity(item)
    }

    const handleRemove = () => {
        RemoveProduct(item)
    }

    return (
        <Grid container sx={CartItemStyle} direction="column" >
            <GridRow >
                <Grid
                    item
                    direction='column'
                    container
                    justifyContent="flex-start" >
                    <Typography variant='h6'> {item.productName}</Typography> <Typography variant='caption' >{item.productModel}</Typography>
                </Grid>
                <Grid item >
                    <Image height={70} width={70} src={item.thumbnailUrl} alt='thumbnail' />
                </Grid >
            </GridRow>
            <Divider />
            <GridRow>
                <Typography variant='subtitle2' >
                    price:
                </Typography>
                <Typography variant='subtitle2'>
                    {item.price}/=
                </Typography>
            </GridRow>
            <Divider />
            <GridRow>
                <Typography variant='subtitle2'>
                    quantity:
                </Typography>

                <Grid item>
                    <Button onClick={handleDecrease} sx={{ padding: '0px' }} >-</Button>
                    <Typography sx={{ display: 'inline' }} variant='subtitle2'> {item.quantity} </Typography>
                    <Button onClick={handleIncrease} sx={{ padding: '0px' }} size='small'>+</Button>
                    <Button onClick={handleRemove} sx={{ padding: '0px' }} size='small'><DeleteForeverIcon sx={{ color: 'red' }} /> </Button>
                </Grid>
            </GridRow >
            <Divider />
            <GridRow>
                <Typography variant='subtitle2'>
                    SubTotal :
                </Typography>
                <Typography variant='subtitle2'>
                    ৳{item.price * item.quantity}
                </Typography>
            </GridRow>
        </Grid >
    )
}

export default memo(CartItem);