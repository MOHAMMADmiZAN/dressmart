import React from 'react';
import HeaderTopBar from "../../Organisms/HeaderTopBar/HeaderTopBar";
import NavBar from "../../Organisms/NavBar/NavBar";


function Header(): JSX.Element {
    return (
        <>
            <HeaderTopBar/>
            <NavBar/>
        </>
    );
}

export default Header;