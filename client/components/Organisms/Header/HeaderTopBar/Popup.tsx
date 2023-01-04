import LoginIcon from '@mui/icons-material/Login';
import { Button, Menu, MenuItem } from '@mui/material';
import { State, useStoreState } from 'easy-peasy';
import Nextlink from 'next/link';
import React from 'react';
import { AuthType } from '../../../../store/models/AuthModel';
import { exclusiveLinkBtn } from '../../../Molecules/Shared/LinkBtn/LinkBtn.style';

function Popup() {

    const { isAuth } = useStoreState((state: State<AuthType>) => state.Auth);

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
            <Button id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={
                    <LoginIcon />} sx={{ ...exclusiveLinkBtn, justifyContent: 'flex-end' }}>
                {isAuth ? 'Dashboard' : 'Login'}
            </Button>

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
            >  {isAuth ?
                <div>
                    <Nextlink href={'/dashboard'}  > <MenuItem onClick={handleClose} > Dashboard  </MenuItem></Nextlink>

                    <Nextlink href={'/login'}  > <MenuItem onClick={handleClose}>Logout</MenuItem></Nextlink>
                </div>
                :
                <div>
                    <Nextlink href={'/login'}  >    <MenuItem href='/login' onClick={handleClose}>Login</MenuItem></Nextlink>
                    <Nextlink href={'/register'}  > <MenuItem onClick={handleClose}>Register</MenuItem>
                    </Nextlink>
                </div>
                }
                <Nextlink href='/ordertrack' > <MenuItem onClick={handleClose}> Order Tracking</MenuItem>  </Nextlink>
            </Menu>
        </>
    )
}

export default Popup