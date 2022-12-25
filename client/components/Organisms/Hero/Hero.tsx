import React from 'react';
import {Grid} from "@mui/material";
import HeroImg from "../../Molecules/HeroImg/HeroImg";

function Hero() : JSX.Element {
    return (
        <>
         <Grid container={true}>
             <Grid item={true} xs={12}>
                 <HeroImg/>
             </Grid>
         </Grid>
        </>
    );
}

export default Hero;