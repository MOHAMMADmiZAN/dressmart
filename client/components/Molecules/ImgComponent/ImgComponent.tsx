import React from 'react';
import {Box, Typography} from "@mui/material";
import {ImgComponentStyle, imgStyle, PriceTypography, TitleTypography} from "./imgComponent.style";
import {memo}  from "react";

interface ImgComponentProps {
    src: any,
    alt: string,
    title?: string,
    price?: number,
}

function ImgComponent(ImgComponentProps: ImgComponentProps) : JSX.Element {
    const {src, alt, title, price} = ImgComponentProps;
    return (
        <Box component={`div`} sx={{...ImgComponentStyle}}>
            {title && <Typography variant={`h6`} component={`h6`} sx={{...TitleTypography}}>{title}</Typography>}
           <img src={src} alt={alt} style={{...imgStyle}}/>
            {price && <Typography variant={`h6`} component={`h6`} sx={{...PriceTypography}}>৳{price}</Typography>}
        </Box>
    );
}

export default memo(ImgComponent);