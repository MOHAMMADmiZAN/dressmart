import React from 'react';
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import LinkBtn from "../../../Molecules/Shared/LinkBtn/LinkBtn";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import { exclusiveLinkBtn } from "../../../Molecules/Shared/LinkBtn/LinkBtn.style";
import { State, useStoreState } from 'easy-peasy';
import { AuthType } from "../../../../store/models/AuthModel";
import { Dialog } from '@mui/material';


function HeaderTopBar(): JSX.Element {

    const { isAuth } = useStoreState((state: State<AuthType>) => state.Auth);
    console.log(isAuth)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Grid container={true} justifyContent={`space-between`} sx={{ ...HeaderTopBar }}>
                <Grid item xs={4}>
                    <LinkBtn href={`/`} label={`Exclusive Party Wear Dresses`} leftIcon={<BoltIcon />} rightIcon={<ArrowCircleRightRoundedIcon />} styles={{ justifyContent: 'flex-start' }} />
                </Grid>
                <Grid item xs={4}>
                    <LinkBtn href={`/`} label={`Order Bulk & Get 10% Discount`} leftIcon={<DeliveryDiningIcon />} />
                </Grid>
                <Grid item xs={2}>
                    <LinkBtn href={`/`} label={`Help`} leftIcon={<ContactSupportIcon />} />
                </Grid>
                <Grid item xs={2}>
                    <Button id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} startIcon={<LoginIcon />} sx={{ ...exclusiveLinkBtn, justifyContent: 'flex-end' }}>Login</Button>
                </Grid>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Grid>
        </>
    );
}

export default HeaderTopBar;