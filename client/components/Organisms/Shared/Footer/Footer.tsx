import React from 'react';
import FooterTopBar from "../../FooterTopBar/FooterTopBar";
import FooterMain from "../../FooterMain/FooterMain";
import FooterBottom from "../../FooterBottom/FooterBottom";

function Footer(): JSX.Element {
    return (
        <>
            <FooterTopBar/>
            <FooterMain/>
            <FooterBottom/>
        </>
    );
}

export default Footer;