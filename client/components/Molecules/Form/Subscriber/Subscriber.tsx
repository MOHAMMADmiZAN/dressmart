import React from 'react';
import {Button, InputBase, Box, OutlinedInput} from "@mui/material";
import {Textarea} from "@mui/joy";
import {SubscribeFormStyle, SubscribeButtonStyle} from "./Subscriber.style";

function Subscriber() {
    return (
        <>

            <Box component={`form`} sx={{...SubscribeFormStyle}}>
                <OutlinedInput sx={{ flex: 1}} placeholder="Enter email to Get Offer and More"/>
                <Button sx={{...SubscribeButtonStyle}}>Subscribe</Button>
            </Box>

        </>
    );
}

export default Subscriber;