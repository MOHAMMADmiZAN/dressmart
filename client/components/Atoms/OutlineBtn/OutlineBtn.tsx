import React, {memo} from 'react';
import {Button} from "@mui/material";

interface OutlineBtnProps {
    OutlineBtnText?: string,
    OutlineBtnLink?: string,
    OutlineBtnLinkText?: string,
    OutlineBtnOnClick?: () => void,
    OutlineBtnIcon?: React.ReactNode,
    isDisable?: boolean,
    sxObj?: object


}

function OutlineBtn(OutlineBtnProps: OutlineBtnProps): JSX.Element {
    const {
        OutlineBtnIcon,
        OutlineBtnOnClick,
        OutlineBtnText,
        OutlineBtnLinkText,
        OutlineBtnLink,
        isDisable,
        sxObj
    } = OutlineBtnProps;

    return (
        <Button size={"small"} sx={[{color: 'primary.main', ...sxObj}]} variant={`outlined`} onClick={OutlineBtnOnClick} disabled={isDisable}>
            {OutlineBtnIcon}
            {OutlineBtnText}
        </Button>

    );
}

export default memo(OutlineBtn);