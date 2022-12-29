import React from 'react'
import Base from "../../components/templates/Base/Base";
import LogIn from '../../components/Organisms/Auth/Login/Login';

function Login(): JSX.Element {
    return (
        <>
            <Base inner={[ <LogIn key={1} />]} >

            </Base>
        </>
    )
}

export default Login