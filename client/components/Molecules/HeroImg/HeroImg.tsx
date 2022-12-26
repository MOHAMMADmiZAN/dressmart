import React from 'react';
import Image from "next/image";
import heroImg from "../../../public/assets/img/hero.png";

function HeroImg() {
    return (
        <>
            <Image src={heroImg} alt={`dressmartHero`} style={{width:'100%',objectFit:'cover',height:'100%'}} priority={true} />
        </>
    );
}

export default HeroImg;