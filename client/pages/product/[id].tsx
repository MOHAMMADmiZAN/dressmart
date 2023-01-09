import React from 'react';
import {useRouter} from "next/router";
import {fetchProducts, getProductById, recentProduct, singleProductResponse} from "../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import Base from "../../components/templates/Base/Base";


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


const SingleProduct: React.FC<SINGLE_PRODUCT_PROPS> = (props) => {

    const Route = useRouter();
    // @ts-ignore
    const id: string = Route.query.id;

    const {
        data: Product,
        isLoading,
        isError,
        error
    } = useQuery<singleProductResponse, Error>(['singleProduct', id], () => getProductById(id))


    return (
        <>
            <Base>

                <p>{Product?.name}</p>
            </Base>


        </>
    );
};


export default SingleProduct;