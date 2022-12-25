import React from 'react';
import {Link,Button} from '@mui/material';

interface LinkIconProps {
    href: string;
    icon: React.ReactNode;
}

function LinkIcon(LinkIconProps: LinkIconProps): JSX.Element {
    return (
        <>
            <Link href={LinkIconProps.href}>
                <Button sx={{color: '#D4AF37'}}> {LinkIconProps.icon}</Button>
            </Link>
        </>
    );
}

export default LinkIcon;