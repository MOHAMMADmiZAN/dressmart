import React from 'react';
import {Paper, Typography} from "@mui/material";
import {memo} from "react";
import {SectionTitleStyle, sectionTitleTypographyStyle} from "./SectionTitle.style";

interface SectionTitleProps {
    SectionTitleTitle: string;
}

function SectionTitle(SectionTitleProps:SectionTitleProps): JSX.Element  {
    const {SectionTitleTitle} = SectionTitleProps;
    return (
        <>
        <Paper sx={{...SectionTitleStyle}}>
            <Typography variant={`h6`} sx={{...sectionTitleTypographyStyle}} >
                {SectionTitleTitle}
            </Typography>
        </Paper>
        </>
    );
}

export default memo(SectionTitle);