import React from 'react';
import Header from "../../Organisms/Shared/Header/Header";
import Footer from "../../Organisms/Shared/Footer/Footer";
import {Paper} from "@mui/material";

interface BaseProps {
    inner?: React.ReactNode[];
    children?: React.ReactNode;
}

function Base(BaseProps: BaseProps): JSX.Element {
    return (
        <>
            <Header/>
            {BaseProps.inner?.map((child, index) => (
                <Paper key={index + 1}>{child}</Paper>
            ))}
            {BaseProps.children}
            <Footer/>


        </>
    );
}

export default Base;