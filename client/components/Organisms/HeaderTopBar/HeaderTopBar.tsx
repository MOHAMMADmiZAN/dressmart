import React from 'react';
import {Button, Grid} from "@mui/material";
import LinkBtn from "../../Molecules/LinkBtn/LinkBtn";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import {exclusiveLinkBtn} from "../../Molecules/LinkBtn/LinkBtn.style";

function HeaderTopBar() : JSX.Element {

    return (
        <>
            <Grid container={true} justifyContent={`space-between`} sx={{...HeaderTopBar}}>
                <Grid item sm={4}>
                    <LinkBtn href={`/`} label={`Exclusive Party Wear Dresses`} leftIcon={<BoltIcon/>} rightIcon={<ArrowCircleRightRoundedIcon/>} styles={{justifyContent: 'flex-start'}}/>
                </Grid>
                <Grid item sm={4}>
                    <LinkBtn href={`/`} label={`Order Bulk & Get 10% Discount`} leftIcon={<DeliveryDiningIcon/>}/>
                </Grid>
                <Grid item sm={2}>
                    <LinkBtn href={`/`} label={`Help`} leftIcon={<ContactSupportIcon/>}/>
                </Grid>
                <Grid item sm={2}>
                    <Button startIcon={<LoginIcon/>} sx={{...exclusiveLinkBtn,justifyContent: 'flex-end'}}>Login</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default HeaderTopBar;