import React from 'react';
import {Box, Container,Grid, Paper} from "@mui/material";
import {navBarStyle} from './NavBar.style'
import Image from "next/image";
import Logo from '../../../public/assets/img/logo.png'

function NavBar() {
    return (
        <>
            <Paper component={`div`} sx={{...navBarStyle}}>
              <Container maxWidth={`xl`}>
                  <Grid container={true} >
                      <Grid item={true} xl={2}>
                        <Image src={Logo} alt={`dressmartLogo`} width={150} height={140}/>
                      </Grid>
                  </Grid>
              </Container>
            </Paper>
        </>
    );
}

export default NavBar;