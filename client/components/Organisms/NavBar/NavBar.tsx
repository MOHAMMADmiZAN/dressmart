import React from 'react';
import {Box, Container,Grid, Paper} from "@mui/material";
import {navBarStyle} from './NavBar.style'
import Logo from "../../Molecules/Logo/Logo";
import Search from "../../Molecules/Form/Search/Search"
import LinkBtn from "../../Molecules/LinkBtn/LinkBtn";
import LinkIcon from "../../Molecules/LinkIcon/LinkIcon";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartBadge from "../../Molecules/CartBadge/CartBadge";


function NavBar() {
    return (
        <>
            <Paper component={`div`} sx={{...navBarStyle}}>
              <Container maxWidth={`xl`}>
                  <Grid container={true} justifyContent={`space-between`} alignItems={`center`} >
                      <Grid item={true} md={2}>
                        <Logo/>
                      </Grid>
                      <Grid item={true} md={6} >
                      <Search/>
                      </Grid>
                      <Grid item={true} md={2}>
                          <LinkIcon href={`/`} icon={<FavoriteBorderIcon/>}/>
                          <CartBadge/>
                      </Grid>
                  </Grid>
              </Container>
            </Paper>
        </>
    );
}

export default NavBar;