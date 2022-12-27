import React from 'react';
import ByRecentProduct from "./ByRecentProduct/ByRecentProduct";
import ByPopularProduct from "./ByPopularProduct/ByPopularProduct";
import ByBrandProduct from "./ByBrandProduct/ByBrandProduct";
import ByCategoryProduct from "./ByCategoryProduct/ByCategoryProduct";

function Products() {
    return (
        <>
            <ByRecentProduct/>
            <ByPopularProduct/>
            <ByCategoryProduct/>
            <ByBrandProduct/>
        </>
    );
}

export default Products;