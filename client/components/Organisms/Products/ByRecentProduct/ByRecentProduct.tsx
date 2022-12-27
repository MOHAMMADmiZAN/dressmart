import React from 'react';
import SectionTitle from "../../../Molecules/Shared/SectionTitle/SectionTitle";
import {fetchProducts, recentProduct, recentProductArray} from "../../../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import ImgComponent from "../../../Molecules/ImgComponent/ImgComponent";
import {Container, Grid} from "@mui/material";
import {QueryClient} from "@tanstack/query-core";

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery<recentProductArray, Error>(['recentProducts'], fetchProducts)

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

function ByRecentProduct() {
    // fetch products by react query
    const {data, isLoading, isError, error} = useQuery<recentProductArray, Error>(["recentProducts"], fetchProducts);
    return (
        <>
            <SectionTitle SectionTitleTitle={`Most Recent Products`}/>
            <Container>
                <Grid container={true} sx={{p:'20px'}}>
                    {data && data.map((product: recentProduct) => {
                        return (
                        <Grid item={true} xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <ImgComponent src={product.variants[0].image.src.url} alt={product.variants[0].image.src.url} title={product.name} key={product.id} price={product.variants[0].salePrice}/>
                        </Grid>
                        )

                    })}
                </Grid>
            </Container>




        </>
    );
}

export default ByRecentProduct;