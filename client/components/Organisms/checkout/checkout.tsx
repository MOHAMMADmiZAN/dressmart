import Grid from '@mui/material/Grid'
import React from 'react'
import { Divider, Typography } from '@mui/material';
import MapItems from '../../Molecules/MapItems/MapItems';
import Input from '../../Molecules/Form/Input/Input';
import { useForm } from 'react-hook-form';
import { useStoreState, State } from 'easy-peasy';
import { CartType } from '../../../store/models/CartModel';
import EmptyCart from '../Cart/CartDrawer/EmptyCart';
import CartItem from '../Cart/CartItem/CartItem';
import GridRow from '../Cart/CartItem/GridRow';
import { checkoutStyle, totalPriceStyle, priceStyle } from './checkout.style';

let ContactInputs = [
    {
        name: 'name',
        type: 'text',
        fullWidth: true
    },
    {
        name: 'email',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '48%' }

    },
    {
        name: 'phone',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '48%' }
    }
]

let ShippingInputs = [
    {
        name: 'address',
        type: 'text',
        fullWidth: true
    },
    {
        name: 'city',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '48%' }
    },
    {
        name: 'phone',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '48%' }
    },
    {
        name: 'note',
        type: 'text',
        fullWidth: true
    }
]

function CheckOut() {


    const { CartItems } = useStoreState((state: State<CartType>) => state.Cart)


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
        }
    });

    return (
        <Grid container alignItems={'flex-start'} >
            <Grid container item xs={7} justifyContent={'center'} sx={{ padding: '30px 10px' }} >
                <Typography variant='h5'>Checkout Info</Typography>
                <Grid container item xs={12} sm={12} md={10} lg={10} xl={8} >
                    <Typography sx={{ margin: '10px 5px' }} variant='h6'>Contact Info</Typography>

                    <MapItems ItemComponent={Input} items={ContactInputs} other={control} />

                    <Typography sx={{ margin: '10px 5px' }} variant='h6'> Shipping Info</Typography>
                    <MapItems ItemComponent={Input} items={ShippingInputs} other={control} />

                </Grid>

                <Grid container item xs={12} sm={12} md={10} lg={10} xl={8} flexDirection={'column'} sx={totalPriceStyle} >
                    <Typography variant='body1'> Your total payable amount is  </Typography>
                    <Typography variant='h4' sx={priceStyle} >৳ {1212} </Typography>
                    <Typography variant='h6'  > Details </Typography>
                    <Typography variant='body1'  > You will get the delivery within 2-3 Days after confirmation.</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={4.3} flexDirection={'column'} alignItems={'center'} sx={checkoutStyle} >

                <Typography variant='h6' sx={{ padding: '0px 0px 10px 0px' }}> Cart OverView</Typography>

                <Grid xs={12}>
                    {CartItems.length > 0 ?
                        < MapItems ItemComponent={CartItem} items={CartItems} /> :
                        <EmptyCart />
                    }

                    <GridRow>
                        <Typography sx={{ padding: '10px 0px' }} variant='h6' >
                            Total:
                        </Typography>
                        <Typography sx={{ padding: '10px 0px' }} variant='h6'>
                            ৳ {2446}
                        </Typography>
                    </GridRow>
                    <GridRow>
                        <Typography variant='h6' sx={{ padding: '10px 0px' }}>
                            Shipping:
                        </Typography>
                        <Typography variant='h6' sx={{ padding: '10px 0px' }}>
                            ৳ {100}
                        </Typography>
                    </GridRow>
                    <Divider />
                    <GridRow>
                        <Typography variant='h5' sx={{ padding: '10px 0px' }}>
                            Payable:
                        </Typography>
                        <Typography variant='h5' sx={{ padding: '10px 0px' }}>
                            ৳ {10000}
                        </Typography>
                    </GridRow>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default CheckOut