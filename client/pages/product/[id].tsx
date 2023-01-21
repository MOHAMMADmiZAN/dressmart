import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import {fetchProducts, getProductById, recentProduct, singleProductResponse} from "../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import Base from "../../components/templates/Base/Base";
import {Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import Star from "../../components/Molecules/Star/Star";
import CartActions from "../../components/Organisms/Cart/CartActions/CartActions";
import {useCartItem} from "../../hooks/useCartItem";
import SelectedVariant from "../../components/Molecules/Product/SelectedVariant/SelectedVariant";

import Product  from "../../components/Organisms/Product/Product";


interface SINGLE_PRODUCT_PROPS {
    Product: singleProductResponse

}


interface Path_Prams {
    id: string
}

export async function getStaticPaths() {
    try {
        const res = await fetchProducts();
        const paths = res.map((product: recentProduct) => ({
            params: {id: product.id.toString()}
        }))

        return {
            paths,
            fallback: false
        }

    } catch (e) {
        console.log(e);
    }


}


export async function getStaticProps(ctx: { params: Path_Prams; }) {
    try {
        const {id} = ctx.params;
        const queryClient = new QueryClient()
        await queryClient.prefetchQuery<singleProductResponse, Error>(['singleProduct'], () => getProductById(id))
        return {
            props: {
                dehydratedState: dehydrate(queryClient),
            },
        }
    } catch (e) {
        console.log(e);
    }
}


const SingleProduct: React.FC<SINGLE_PRODUCT_PROPS> = () => {

    const Route = useRouter();
    const id: unknown = Route.query.id;

    const {data} = useQuery<singleProductResponse, Error>(['singleProduct', id], () => getProductById(id))




    return (
        <>
            <Base>
                <Head>
                    <title>{data?.name || `Not Found`}</title>
                    <meta name="description" content={data?.metaData || `Not Found`}/>
                    <meta name="keywords" content={data?.metaTags || `Not Found`}/>
                    <meta name="author" content="DressMart"/>
                </Head>
                <Container>
                    <Product Product={data as singleProductResponse}/>

                </Container>
            </Base>
        </>
    );
};


export default SingleProduct;