import React, {useEffect} from 'react';
import SectionTitle from "../../../Molecules/Shared/SectionTitle/SectionTitle";
import {fetchProducts} from "../../../../api/Product.api";

function ByRecentProduct() {
    useEffect(() => {
        // fetch Products
        fetchProducts().then((res) => {
            console.log(res)
        })

    })

    return (
        <>
            <SectionTitle SectionTitleTitle={`Most Recent Products`}/>
        </>
    );
}

export default ByRecentProduct;