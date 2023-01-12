import React from 'react'
import Base from '../../components/templates/Base/Base'
import CheckOut from '../../components/Organisms/checkout/checkout';

function Checkout() {
    return (
        <>
            <Base inner={[<CheckOut key={1} />]} />
        </>
    )
}

export default Checkout