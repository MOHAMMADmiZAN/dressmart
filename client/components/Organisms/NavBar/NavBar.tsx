import React from 'react';
import {Box, Container,Grid, Paper} from "@mui/material";
import {navBarStyle} from './NavBar.style'
import Logo from "../../Molecules/Logo/Logo";


function NavBar() {
    return (
        <>
            <Paper component={`div`} sx={{...navBarStyle}}>
              <Container maxWidth={`xl`}>
                  <Grid container={true} >
                      <Grid item={true} xl={2}>
                        <Logo/>
                      </Grid>
                  </Grid>
              </Container>
            </Paper>
        </>
    );
}

export default NavBar;