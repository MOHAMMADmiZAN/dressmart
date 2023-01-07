import React from 'react';
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import NavBar from "./NavBar/NavBar";


function Header(): JSX.Element {
    return (
        <>
            <HeaderTopBar />
            <NavBar />
        </>
    );
}

export default Header;