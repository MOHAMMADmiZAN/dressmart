import React from 'react';
import Image from "next/image";
import LogoImg from '../../../public/assets/img/logo.png'
import {Button, Link} from "@mui/material";

function Logo() {
    return (
        <>
            <Link href={`/`}>
                <Button>
                    <Image src={LogoImg} alt={`dressmartLogo`} width={140}/>
                </Button>
            </Link>
        </>
    );
}

export default Logo;