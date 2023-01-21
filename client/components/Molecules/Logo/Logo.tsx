import React, {useEffect} from 'react';
import Image from "next/image";
import LogoImg from '../../../public/assets/img/logo.png'
import {Button, Link} from "@mui/material";
import NextLink from "next/link";

function Logo() {
    return (
        <>
            <NextLink href={`/`}>
                <Button>
                    <Image src={LogoImg} alt={`dressmartLogo`} width={140}/>
                </Button>
            </NextLink>
        </>
    );
}

export default Logo;