import React from 'react';
import {Button} from '@mui/material';
// import memo
import {memo} from 'react';
import NextLink from "next/link";

interface LinkIconProps {
    href: string;
    icon: React.ReactNode;
}

function LinkIcon(LinkIconProps: LinkIconProps): JSX.Element {
    return (
        <>
            <NextLink href={LinkIconProps.href}>
                <Button sx={{color: '#D4AF37'}}> {LinkIconProps.icon}</Button>
            </NextLink>
        </>
    );
}

export default memo(LinkIcon);