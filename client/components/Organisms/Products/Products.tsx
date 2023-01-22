import React from 'react';
import ByRecentProduct from "./ByRecentProduct/ByRecentProduct";
import ByPopularProduct from "./ByPopularProduct/ByPopularProduct";
import ByBrandProduct from "./ByBrandProduct/ByBrandProduct";
import ByCategoryProduct from "./ByCategoryProduct/ByCategoryProduct";
import {findEnglishSentence} from "../../../utils/Helper";

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