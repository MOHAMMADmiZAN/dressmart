import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import {FooterTopBarStyle} from "./FooterTopBar.style";
import FooterTopbarSection from "../../Molecules/FooterTopbarSection/FooterTopbarSection";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import sslcommerzImage from '../../../public/assets/img/sslcommerz.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import deliveryImage from '../../../public/assets/img/delivery.png';

function FooterTopBar(): JSX.Element {
    return (
        <>
            <Paper sx={{...FooterTopBarStyle}}>
                <Container maxWidth={`xl`}>
                    <Grid container={true} justifyContent={`space-between`} alignItems={`center`}>
                        <Grid item={true} xs={12} sm={5}>
                            <FooterTopbarSection FooterTopbarSectionIcon={<HttpsRoundedIcon sx={{color: '#D4AE3A'}}/>}
                                                 FooterTopbarSectionTitle={`All secure payment methods`}
                                                 FooterTopbarSectionImage={sslcommerzImage}/>
                        </Grid>
                        <Grid item={true} xs={12} sm={2}>
                            <FooterTopbarSection
                                FooterTopbarSectionIcon={<SentimentVerySatisfiedIcon sx={{color: '#D4AE3A'}}/>}
                                FooterTopbarSectionTitle={`Satisfaction guaranteed`}
                                FooterTopBarSectionText={`Made with premium quality materials.Cozy yet lasts the test of time `}/>
                        </Grid>
                        <Grid item={true} xs={12} sm={5}>
                            <FooterTopbarSection FooterTopbarSectionIcon={<LocalShippingIcon sx={{color: '#D4AE3A'}}/>}
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