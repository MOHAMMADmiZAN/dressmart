import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {FooterTopbarSectionViewStyle,ImageStyle,TypographyStyle} from "./FooterTopbarSection.style";


interface FooterTopbarSectionProps {
    FooterTopbarSectionIcon: React.ReactNode;
    FooterTopbarSectionTitle: string;
    FooterTopbarSectionImage?: any;
    FooterTopBarSectionText?: string;
}

function FooterTopbarSection(FooterTopBarSectionProps: FooterTopbarSectionProps): JSX.Element {
    const {
        FooterTopbarSectionIcon,
        FooterTopbarSectionTitle,
        FooterTopbarSectionImage,
        FooterTopBarSectionText
    } = FooterTopBarSectionProps;
    return (
        <>
            <Box sx={{...FooterTopbarSectionViewStyle}}>
                {FooterTopbarSectionIcon}
                {/*<HttpsRoundedIcon sx={{color: '#D4AE3A'}}/>*/}
                <Typography variant={`h4`} sx={{...TypographyStyle}}>
                    {FooterTopbarSectionTitle}
                </Typography>
                {FooterTopBarSectionText && <Typography variant={`body1`} sx={{...TypographyStyle, fontWeight: 500}}>
                    {FooterTopBarSectionText}
                </Typography>}
                <Image src={FooterTopbarSectionImage} alt={FooterTopbarSectionImage} style={{...ImageStyle}}/>
            </Box>
        </>
    );

}

export default FooterTopbarSection;