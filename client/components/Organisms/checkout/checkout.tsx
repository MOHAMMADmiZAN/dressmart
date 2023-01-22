import Grid from '@mui/material/Grid'
import React, { memo, useEffect, useState } from 'react'
import { Divider, Typography } from '@mui/material';
import MapItems from '../../Molecules/MapItems/MapItems';
import Input from '../../Molecules/Form/Input/Input';
import { useForm } from 'react-hook-form';
import EmptyCart from '../Cart/CartDrawer/EmptyCart';
import CartItem from '../Cart/CartItem/CartItem';
import { priceStyle, totalPriceStyle } from './checkout.style';
import Tab from '../../Molecules/Table/Table';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useCartItem } from "../../../hooks/useCartItem";
import useAuth from "../../../hooks/useAuth";
import GridRow from "../Cart/CartItem/GridRow";

let ContactInputs = [
    {
        name: 'name',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '97.4%' }
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
        fullWidth: true,
        style: { maxWidth: '97.4%' }
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
        fullWidth: true,
        style: { maxWidth: '97.4%' }
    }
]


// const head = ['Purpose', 'Amount']

interface checkOutState {
    subtotal: number,
    shipping: number,
    discount: number,
    total: number

}

interface tableData {
    tableHead: Array<string>,
    tableContent: Array<tableContent>

}

interface tableContent {
    title: string,
    value: string
}


function CheckOut() {

    const { items } = useCartItem()
    const { user } = useAuth()
    const [checkOut, setCheckOut] = useState<checkOutState>({
        subtotal: 0,
        shipping: 0,
        discount: 0,
        total: 0

    })

    const [table, setTable] = useState<tableData>({
        tableHead: ['Purpose', 'Amount'],
        tableContent: [
            {
                title: 'Total',
                value: `${checkOut.subtotal}`
            },
            {
                title: 'Shipping',
                value: `${checkOut.shipping}`
            }
        ]
    })


    useEffect(() => {
        let subtotal = 0;
        let shipping = 0;
        let total = 0;

        items.map(item => {
            subtotal += item.price * item.quantity
        });
        shipping += items.length ? 100 : 0;
        total = subtotal + shipping;

        setCheckOut({ ...checkOut, shipping, subtotal, total });
        setTable({
            ...table,
            tableContent: [
                {
                    title: 'Total',
                    value: `${total}`
                },
                {
                    title: 'Shipping',
                    value: `${shipping}`
                }
            ]
        });



    }, [items])


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',

        }
    });

    return (
        <>
            <Grid container justifyContent={'space-around'}>
                <Grid item={true} xs={7} flexDirection={'column'} alignItems={'center'} marginY={`10px`}>
                    <Card>
                        <CardContent sx={{ padding: '0' }}>
                            <Typography variant='h5' sx={{ color: 'primary.main', textAlign: `center` }} marginY={`20px`}>Checkout
                                Info</Typography>
                            <Divider sx={{ borderBottomWidth: `2px` }} />
                            <Grid container justifyContent={'center'}>
                                <Grid item xs={12} sm={12} md={10} lg={10} xl={8} justifyContent={`space-between`}>
                                    <Typography sx={{ margin: '10px 5px' }} variant='h6'>Contact Info</Typography>
                                    <MapItems ItemComponent={Input} items={ContactInputs} other={control} />

                                    <Typography sx={{ margin: '10px 5px' }} variant='h6'> Shipping Info</Typography>
                                    <MapItems ItemComponent={Input} items={ShippingInputs} other={control} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={10} lg={10} xl={8} flexDirection={'column'}
                                    sx={totalPriceStyle}>
                                    <Typography variant='body1'> Your total payable amount is </Typography>
                                    <Typography variant='h4' sx={priceStyle}>৳ {checkOut.total} </Typography>

                                    <Typography variant='h6'> Details </Typography>

                                    <Tab head={table.tableHead} content={table.tableContent} bgColor={'#F8F8F8'} />

                                    <Typography variant='body1' sx={{ pt: `10px` }}> You will get the delivery within 2-3
                                        Days after confirmation.</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} flexDirection={'column'} alignItems={'center'} sx={{}} marginY={`10px`}>
                    <Card>
                        <CardContent sx={{ padding: `0` }}>
                            <Typography variant='h5' sx={{ color: 'primary.main', textAlign: `center` }}
                                marginY={`20px`}> Cart OverView</Typography>
                            <Divider sx={{ borderBottomWidth: `2px` }} />

                            <Grid container={true} justifyContent={`center`} flexWrap={`wrap`}>
                                <Grid item={true} xs={12} sm={12} md={10} lg={10} justifyContent={`center`}>
                                    {items.length > 0 ?
                                        <MapItems ItemComponent={CartItem} items={items} /> :
                                        <EmptyCart />
                                    }
                                </Grid>
                                <Divider />
                                <GridRow >
                                    <Typography sx={{ padding: '10px 0px' }} variant='h6'>
                                        Total:
                                    </Typography>
                                    <Typography sx={{ padding: '10px 0px', color: '#4098c4' }} variant='h6'>
                                        ৳ {checkOut.subtotal}
                                    </Typography>
                                </GridRow>
                                <GridRow>
                                    <Typography variant='h6' sx={{ padding: '10px 0px' }}>
                                        Shipping:
                                    </Typography>
                                    <Typography variant='h6' sx={{ padding: '10px 0px', color: '#4098c4' }}>
                                        ৳ {checkOut.shipping}
                                    </Typography>
                                </GridRow>
                                <Divider />
                                <GridRow>
                                    <Typography variant='h5' sx={{ padding: '10px 0px' }}>
                                        Payable:
                                    </Typography>
                                    <Typography variant='h5' sx={{ padding: '10px 0px', color: '#4098c4' }}>
                                        ৳ {checkOut.total}
                                    </Typography>
                                </GridRow>
                            </Grid>

                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default memo(CheckOut)