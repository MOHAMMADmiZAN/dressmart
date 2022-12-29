import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Button, Link, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import {SubmitHandler, useForm} from "react-hook-form";
import Input from '../../../Molecules/Form/Input/Input';
import MapItems from '../../../Molecules/MapItems/MapItems';
import {BoxStyle} from './Register.style';
import {registerSchema} from '../../../../utils/validation';
import {AuthType} from "../../../../store/models/AuthModel";
import {Actions, useStoreActions} from "easy-peasy";
import {Router, useRouter} from "next/router";


export interface RegisterFormInput {
    username: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword?: string;
}


let inputs = [
    {
        name: 'username',
        type: 'text',
    },
    {
        name: 'email',
        type: 'text',
    },
    {
        name: 'phone',
        type: 'text',
    },
    {
        name: 'password',
        type: 'password',
    },
    {
        name: 'confirmPassword',
        type: 'password',
    }
]

const Register = () => {

    //use of react hook from with validation by yup
    const {control, handleSubmit, formState: {errors},} = useForm({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }, resolver: yupResolver(registerSchema)
    });
    const Router = useRouter();
    const Register = useStoreActions((actions: Actions<AuthType>) => actions.Auth.Register);


    const onSubmit: SubmitHandler<RegisterFormInput> = async data => {
        if (data.password === data.confirmPassword) {
            await Register(data)&& await Router.push(`/`);


        } else {
            alert("Password don't match with confirm password")
        }
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
                        Register
                    </Typography>

                    {/* Input Items map through MapItems */}
                    <MapItems items={inputs} ItemComponent={Input} other={control}/>

                    <Button
                        variant="contained"
                        fullWidth={true}
                        sx={{
                            margin: '10px 0px', bgcolor: 'primary.main', color: 'white'
                        }} type="submit">Submit</Button>

                    <Typography variant="body1" component="p">
                        Already have an account? <NextLink href="/login"> <Link underline="hover">
                        Login
                    </Link>
                    </NextLink>
                    </Typography>

                </Box>
            </Grid>
        </Grid>
    );
};

export default Register