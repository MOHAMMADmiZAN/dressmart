import React from 'react';
import FooterTopBar from "../../Organisms/FooterTopBar/FooterTopBar";
import FooterMain from "../../Organisms/FooterMain/FooterMain";
import FooterBottom from "../../Organisms/FooterBottom/FooterBottom";

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