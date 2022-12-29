import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from '../../../../utils/validation';
import Input from '../../../Molecules/Form/Input/Input';
import MapItems from '../../../Molecules/MapItems/MapItems';
import { BoxStyle } from './Login.style';
// import {Actions, useStoreActions} from "easy-peasy";
import { AuthType } from "../../../../store/models/AuthModel";
import { Actions, useStoreActions } from "easy-peasy";


let inputs = [
    {
        name: 'email',
        type: 'text',
    },
    {
        name: 'password',
        type: 'password',
    }
]


type IFormInput = {
    email: string;
    password: string;
}


type Auth = {
    Auth: typeof AuthModel
}


const LogIn = () => {
    //use of react hook from with validation by yup
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }, resolver: yupResolver(loginSchema)
    });


    const LogIn = useStoreActions((actions: Actions<AuthType>) => actions.Auth.Login);


    const onSubmit: SubmitHandler<IFormInput> = async data => {
        await LogIn(data)

    };


    return (
        <Grid container justifyContent="center"
            alignItems="center">
            <Grid item xs={12} md={5} sm={9} lg={4}>

                <Box
                    component="form"
                    sx={BoxStyle}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography variant="h6" component="h6">
                        Login
                    </Typography>

                    {/* Input Items map through MapItems */}
                    <MapItems items={inputs} ItemComponent={Input} other={control} />


                    <Button
                        variant='contained'
                        fullWidth={true}
                        sx={{
                            margin: '10px 0px', bgcolor: 'primary.main', color: 'white',
                        }} type="submit">Submit</Button>

                    <Typography component={'span'} variant='body2'>
                        Forget your password? Reset
                    </Typography>

                    <Typography component={'span'} variant='body2'>Or</Typography>

                    <Typography component={'span'} variant='body2'>
                        Do not have an account? <NextLink href="/register">
                            Register
                        </NextLink>
                    </Typography>

                </Box>
            </Grid>
        </Grid>
    );
};

export default LogIn