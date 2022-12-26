import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import {FooterTopBarStyle, IconColor} from "./FooterTopBar.style";
import FooterTopbarSection from "../../Molecules/Shared/FooterTopbarSection/FooterTopbarSection";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import sslcommerzImage from '../../../public/assets/img/sslcommerz.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import deliveryImage from '../../../public/assets/img/delivery.png';
import SatisfactionImage from '../../../public/assets/img/satisfaction.jpg';

function FooterTopBar(): JSX.Element {
    return (
        <>
            <Paper sx={{...FooterTopBarStyle}}>
                <Container maxWidth={`xl`}>
                    <Grid container={true} justifyContent={`space-between`} alignItems={`center`}>
                        <Grid item={true} xs={12} sm={4}>
                            <FooterTopbarSection FooterTopbarSectionIcon={<HttpsRoundedIcon sx={{...IconColor}}/>}
                                                 FooterTopbarSectionTitle={`All secure payment methods`}
                                                 FooterTopbarSectionImage={sslcommerzImage}/>
                        </Grid>
                        <Grid item={true} xs={12} sm={4}>
                            <FooterTopbarSection
                                FooterTopbarSectionIcon={<SentimentVerySatisfiedIcon sx={{...IconColor}}/>}
                                FooterTopbarSectionTitle={`Satisfaction guaranteed`}
                                FooterTopbarSectionImage={SatisfactionImage}
                            />
                        </Grid>
                        <Grid item={true} xs={12} sm={4}>
                            <FooterTopbarSection FooterTopbarSectionIcon={<LocalShippingIcon sx={{...IconColor}}/>}
                                                 FooterTopbarSectionTitle={`Worldwide delivery`}
                                                 FooterTopbarSectionImage={deliveryImage}/>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

        </>
    );
}

export default FooterTopBar;