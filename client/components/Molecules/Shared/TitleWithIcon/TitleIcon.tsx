import React from 'react';
import {Box, Typography} from "@mui/material";
import {memo} from "react";
import {TitleIconStyle, TypographyStyle} from "./TitleIcon.style";

interface TitleIconProps {
    TitleIconIcon: React.ReactNode;
    TitleIconTitle: string;
}
function TitleIcon(TitleIconProps:TitleIconProps): JSX.Element  {
      const {TitleIconIcon, TitleIconTitle} = TitleIconProps;
    return (
        <>
            <Box sx={{...TitleIconStyle}}>
                {TitleIconIcon}
               <Typography variant={`h3`} sx={{...TypographyStyle}}>
                   {TitleIconTitle}
               </Typography>
            </Box>
        </>
    );
}

export default memo(TitleIcon);