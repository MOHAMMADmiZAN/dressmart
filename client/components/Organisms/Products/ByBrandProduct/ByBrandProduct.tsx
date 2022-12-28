import React from 'react';
import SectionTitle from "../../../Molecules/Shared/SectionTitle/SectionTitle";
import Star from "../../../Molecules/Star/Star";

function ByBrandProduct() {
    return (
        <>
            <SectionTitle SectionTitleTitle={` Most Popular Brands `}/>
            <Star rating={2.1}/>
        </>
    );
}

export default ByBrandProduct;