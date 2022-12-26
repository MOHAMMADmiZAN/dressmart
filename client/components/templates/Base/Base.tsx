import React from 'react';
import Header from "../../Ui/Header/Header";
import Footer from "../../Ui/Footer/Footer";
import {Paper,Box} from "@mui/material";
import {memo}  from "react";

interface BaseProps {
    inner?: React.ReactNode[];
    children?: React.ReactNode;
}

function Base(BaseProps: BaseProps): JSX.Element {
     const {inner,children} = BaseProps;
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