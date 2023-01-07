import Grid from '@mui/material/Grid'
import React from 'react'
import { Typography } from '@mui/material';
import MapItems from '../../Molecules/MapItems/MapItems';
import Input from '../../Molecules/Form/Input/Input';
import { useForm } from 'react-hook-form';

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
        style: { maxWidth: '260px' }

    },
    {
        name: 'phone',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '260px' }
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
        style: { maxWidth: '260px' }
    },
    {
        name: 'phone',
        type: 'text',
        fullWidth: true,
        style: { maxWidth: '260px' }
    },
    {
        name: 'note',
        type: 'text',
        fullWidth: true
    }
]


function CheckOut() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
        }
    });

    return (
        <Grid container >
            <Grid container item xs={7} justifyContent={'center'} sx={{ padding: '30px' }} >
                <Typography variant='h5'>Checkout Info</Typography>
                <Grid container item xs={12} sm={12} md={10} lg={10} >
                    <Typography sx={{ margin: '10px 5px' }} variant='h6'>Contact Info</Typography>

                    <MapItems ItemComponent={Input} items={ContactInputs} other={control} />

                    <Typography sx={{ margin: '10px 5px' }} variant='h6'> Shipping Info</Typography>
                    <MapItems ItemComponent={Input} items={ShippingInputs} other={control} />

                </Grid>
            </Grid>
            <Grid item xs={5} sx={{ backgroundColor: '#fffff' }}>
                Cart
            </Grid>


        </Grid>
    )
}

export default CheckOut