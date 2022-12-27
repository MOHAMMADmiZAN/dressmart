import React, {useEffect} from 'react';
import SectionTitle from "../../../Molecules/Shared/SectionTitle/SectionTitle";
import {fetchProducts} from "../../../../api/Product.api";

function ByRecentProduct() {
    useEffect(() => {
        // fetch Products
        fetchProducts().then((res) => {
            res.data.reduce((acc:Array<object>, cur:Array<object>) => {
                console.log(acc, cur);

            },[])
        })

    })

    return (
        <>
            <SectionTitle SectionTitleTitle={`Most Recent Products`}/>
        </>
    );
}

export default ByRecentProduct;