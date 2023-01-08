import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {fetchProducts, getProductById, recentProduct, singleProductResponse} from "../../api/Product.api";
import {useQuery} from "@tanstack/react-query";

interface SINGLE_PRODUCT_PROPS {
    Product: any;

}


interface Path_Prams {
    id: string
}



const SingleProduct: React.FC<SINGLE_PRODUCT_PROPS> = (props) => {
    const Route = useRouter();

    let {id} = Route.query;

     const {data, isLoading, isError, error} = useQuery<singleProductResponse, Error>(['singleProduct'],  () => getProductById(6));

   useEffect(() => {
      getProductById(5).then((data) => {
          console.log(data);
      })
   }, [])


    return (
        <>
            <h1> Its SingleProduct {id}</h1>
        </>
    );
};

// export async function getStaticPaths() {
//     const res = await fetchProducts();
//     return {
//         paths: res.map((product: recentProduct) => ({
//             params: {
//                 id: product.id.toString()
//             }
//         })),
//         fallback: false
//     }
//
//
// }
//
// export async function getStaticProps(ctx: { params: Path_Prams; }) {
//     const prams: Path_Prams = ctx.params;
//     const {id} = prams;
//     const Product = await getProductById(id);
//     console.log(Product);
//     return {
//         props: {
//             Product
//         }
//     }
//
// }



export default SingleProduct;