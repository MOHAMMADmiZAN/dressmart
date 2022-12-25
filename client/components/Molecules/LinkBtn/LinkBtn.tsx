import React from 'react';
import {Link, Typography} from '@mui/material';
import {exclusiveLinkBtn} from "./LinkBtn.style";


// metarial ui icon type
type IconType = React.ElementType<React.SVGProps<SVGSVGElement>>;
type reactNode = React.ReactNode;

// class


interface LinkBtnProps {
    href: string;
    leftIcon?: reactNode;
    rightIcon?: reactNode;
    label: string;
    children?: reactNode;
    className?: object;
    onClick?: () => void;


}

function LinkBtn(props: LinkBtnProps): JSX.Element {
    return (
        <>
            <Link underline="hover" href={props.href} sx={{...exclusiveLinkBtn, ...props.className}}>
                {props.leftIcon && props.leftIcon}
                <Typography variant="button" sx={{margin: '0 5px',fontWeight:'700'}}>
                    {props.label}
                </Typography>
                {props.rightIcon && props.rightIcon}
                {props.children && props.children}
            </Link>
        </>
    );
}

export default LinkBtn;