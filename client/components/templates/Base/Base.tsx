import React, {memo} from 'react';
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import {Box} from "@mui/material";

interface BaseProps {
    inner?: React.ReactNode[];
    children?: React.ReactNode;
}

function Base(BaseProps: BaseProps): JSX.Element {
    const {inner, children} = BaseProps;
    return (
        <>
            <Header/>
            {inner?.map((child, index) => (
                <Box key={index + 1}>{child}</Box>
            ))}
            {children}
            <Footer/>
        </>
    );
}

export default memo(Base);