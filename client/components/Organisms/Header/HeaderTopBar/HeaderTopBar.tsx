import React from 'react';
import {Button, Grid} from "@mui/material";
import LinkBtn from "../../../Molecules/Shared/LinkBtn/LinkBtn";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import {exclusiveLinkBtn} from "../../../Molecules/Shared/LinkBtn/LinkBtn.style";
import {State, useStoreState} from 'easy-peasy';
import {AuthType} from "../../../../store/models/AuthModel";
function HeaderTopBar() : JSX.Element {

    const {isAuth} = useStoreState((state: State<AuthType>) => state.Auth);
    console.log(isAuth)

    return (
        <>
            <Grid container={true} justifyContent={`space-between`} sx={{...HeaderTopBar}}>
                <Grid item xs={4}>
                    <LinkBtn href={`/`} label={`Exclusive Party Wear Dresses`} leftIcon={<BoltIcon/>} rightIcon={<ArrowCircleRightRoundedIcon/>} styles={{justifyContent: 'flex-start'}}/>
                </Grid>
                <Grid item xs={4}>
                    <LinkBtn href={`/`} label={`Order Bulk & Get 10% Discount`} leftIcon={<DeliveryDiningIcon/>}/>
                </Grid>
                <Grid item xs={2}>
                    <LinkBtn href={`/`} label={`Help`} leftIcon={<ContactSupportIcon/>}/>
                </Grid>
                <Grid item xs={2}>
                    <Button startIcon={<LoginIcon/>} sx={{...exclusiveLinkBtn,justifyContent: 'flex-end'}}>Login</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default HeaderTopBar;