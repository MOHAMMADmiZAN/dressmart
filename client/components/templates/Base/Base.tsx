import React, {memo} from 'react';
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import {Box} from "@mui/material";
import {NextPage} from "next";

interface BaseProps {
    inner?: Array<React.ReactNode>;
    children?: React.ReactNode;
}

const Base: NextPage<BaseProps> = ({inner, children})=> {

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