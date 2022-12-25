import React from 'react';
import Header from "../../Organisms/Shared/Header/Header";
import Footer from "../../Organisms/Shared/Footer/Footer";
import {Paper,Box} from "@mui/material";
import {memo}  from "react";

interface BaseProps {
    inner?: React.ReactNode[];
    children?: React.ReactNode;
}

function Base(BaseProps: BaseProps): JSX.Element {
    return (
        <>
            <Header/>
            {BaseProps.inner?.map((child, index) => (
                <Box key={index + 1}>{child}</Box>
            ))}
            {BaseProps.children}
            <Footer/>


        </>
    );
}

export default memo(Base);