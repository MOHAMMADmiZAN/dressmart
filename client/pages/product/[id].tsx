import React from 'react';
import {useRouter} from "next/router";
import {fetchProducts, getProductById, recentProduct, singleProductResponse} from "../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";

interface SINGLE_PRODUCT_PROPS {
    Product: any;

}


interface Path_Prams {
    id: string
}

export async function getStaticPaths() {
    const res = await fetchProducts();

    const paths = res.map((product: recentProduct) => ({
        params: {id: product.id.toString()}
    }))

    return {
        paths,
        fallback: false
    }


}



export async function getStaticProps(ctx: { params: Path_Prams; }) {
    const {id} = ctx.params;
    console.log(id);
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery<singleProductResponse, Error>(['singleProduct'], () => getProductById(id))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}


const SingleProduct: React.FC<SINGLE_PRODUCT_PROPS> = (props) => {
    const Route = useRouter();
    const id = Route.query.id;
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery<singleProductResponse, Error>(['singleProduct'], () => getProductById(4));


    return (
        <>

            <h1> Its SingleProduct {id}</h1>
            <h2>{data?.name}</h2>


        </>
    );
};




export default SingleProduct;