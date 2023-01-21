import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';
import Image from 'next/image';
import React, {memo, useEffect} from 'react';
import { CartType, ProductPayload } from '../../../../store/models/CartModel';
import { CartItemStyle } from './CartItem.style';
import GridRow from './GridRow';
import { AuthType } from '../../../../store/models/AuthModel';
import CartActions from "../CartActions/CartActions";




type CartItemProps = React.PropsWithChildren<{
    item: ProductPayload
}>

function CartItem({ item }: CartItemProps): JSX.Element {

    const { AddProduct, AddProductThunk, decrementProductQuantity, DecreaseProductThunk, RemoveProductThunk, RemoveProduct } = useStoreActions((actions: Actions<CartType>) => actions.Cart);

    const isAuth = useStoreState((state: State<AuthType>) => state.Auth.isAuth)



    const handleRemove = () => {
        isAuth ? RemoveProductThunk(item) : RemoveProduct(item)
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
                    <Image height={80} width={80} src={item.thumbnailUrl} alt='thumbnail' />
                </Grid >
            </GridRow>
            <Divider />
            <GridRow>
                <Typography variant='subtitle2' >
                    price:
                </Typography>
                <Typography variant='subtitle2'>
                    ৳{item.price}
                </Typography>
            </GridRow>
            <Divider />
            <GridRow>
                <Typography variant='subtitle2'>
                    quantity:
                </Typography>

                <Grid item justifyContent={`space-between`}>
                   <CartActions productName={item.productName} productId={item.productId} productModel={item.productModel} thumbnailUrl={item.thumbnailUrl} price={item.price} quantity={item.quantity} variant={item.variant}  BtnSxObj={{minWidth:'10px',height:'30px'}} isDel={true} />
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
            <Divider sx={{ color: 'black', backgroundColor: 'gray', border: '1px solid gray' }} />
        </Grid >
    )
}

export default memo(CartItem);