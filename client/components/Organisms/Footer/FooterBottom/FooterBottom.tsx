import React from 'react';
import {Grid, Typography} from "@mui/material";
import {bgcolor} from "@mui/system";

function FooterBottom() {
    return (
        <>
        <Grid container={true} justifyContent={`center`}>
            <Grid item={true} xs={12} bgcolor={`#37383F`} padding={`10px 15px`} textAlign={`center`}>
                <Typography variant={`h6`} color={`#fff`} fontSize={`14px`}>
                    Copyright © 2022 DressMart Limited. All Right Reserved
                </Typography>
            </Grid>
        </Grid>
        </>
    );
}

export default FooterBottom;