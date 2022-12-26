import React, {useId} from 'react';
import {Container, Grid, Paper, Typography} from "@mui/material";
import {FooterMainStyle, FooterMainTypographyStyle} from "./FooterMain.style";
import Subscriber from "../../Molecules/Form/Subscriber/Subscriber";
import TitleIcon from "../../Molecules/TitleWithIcon/TitleIcon";
import MailIcon from "@mui/icons-material/Mail";
import {IconColor} from "../../Molecules/Form/Subscriber/Subscriber.style";
import CallIcon from '@mui/icons-material/Call';

function FooterMain(): JSX.Element {
    return (
        <>
            <Paper sx={{...FooterMainStyle}}>
                <Container>
                    <Grid container={true}>
                        <Grid item={true} xs={12} md={6}>
                            <TitleIcon TitleIconIcon={<MailIcon sx={{...IconColor}}/>} TitleIconTitle={`GET SPECIAL DISCOUNTS IN YOUR INBOX`} key={useId()}/>
                            <Subscriber/>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <TitleIcon TitleIconIcon={<CallIcon sx={{...IconColor}}/>} TitleIconTitle={`FOR ANY HELP YOU MAY CALL US AT`} key={useId()}/>
                            <Typography variant={`body1`} sx={{...FooterMainTypographyStyle}}>
                                +880 1234 567890
                            </Typography>
                            <Typography variant={`body1`} sx={{...FooterMainTypographyStyle}}>
                                Open 24 Hours a Day, 7 Days a week
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

        </>
    );
}

export default FooterMain;