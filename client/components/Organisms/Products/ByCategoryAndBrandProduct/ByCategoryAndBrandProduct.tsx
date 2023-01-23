import React, {memo, useEffect, useState} from 'react';
import {getProductByCategoryAndBrand, recentProductArray} from "../../../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {Box,Grid} from "@mui/material";
import {QueryClient} from "@tanstack/query-core";
import ProductCard from "../../../Molecules/Product/ProductCard/ProductCard";
import {useRouter} from "next/router";

interface BY_CATEGORY_AND_BRAND_PRODUCT_PROPS {
    category: string,
    brand: string

}




const ByCategoryAndBrandProduct: React.FC<BY_CATEGORY_AND_BRAND_PRODUCT_PROPS> = ({category, brand}) => {
    const {
            data,
            isLoading,
            isError,
            error
        } = useQuery<recentProductArray, Error>(["categoryAndBrand"], () => getProductByCategoryAndBrand(category, brand))

      const Router = useRouter();
        const {query} = Router;



        return (
            <>
                <Grid container={true} justifyContent={`space-between`}>

                    {data && data.filter((p)=>p.id != query.id as unknown as number ).map((product) => {
                        return (
                            <Grid item={true} xs={12} sm={12} md={6} lg={6} key={product.id}>
                                <ProductCard key={product.id} ProductCardTitle={product.name} ProductCardModel={product.model} ProductCardPrice={product.salePrice} ProductCardImage={product.thumbnail} ProductCardRating={product.rating} ProductID={product.id}/>
                            </Grid>
                        )

                    })}

                </Grid>


            </>
        );
    }
;

export default memo(ByCategoryAndBrandProduct);