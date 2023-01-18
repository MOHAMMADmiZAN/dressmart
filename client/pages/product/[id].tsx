import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {fetchProducts, getProductById, recentProduct, singleProductResponse} from "../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import Base from "../../components/templates/Base/Base";
import {Box, Card, CardMedia, Container, Grid, Typography} from "@mui/material";


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

    const id: unknown = Route.query.id;

    const {
        data: Product,
        isLoading,
        isError,
        error
    } = useQuery<singleProductResponse, Error>(['singleProduct', id], () => getProductById(id))
    const [productImage, setProductImage] = useState<string>('');
    useEffect(() => {
        setProductImage(Product ? Product.thumbnail : '')
        console.log(Product)

    }, [Product])

    const handleVariantClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const variantImage = target.getAttribute('data-image');
        setProductImage(variantImage ? variantImage : '')
        const variantStock = target.getAttribute('data-stock');
        console.log(variantStock)
        const variantColor = target.getAttribute('data-color');
        console.log(variantColor)

    }
    const colorBtnStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        transition: 'all .3s ease-in-out',
        m: '5px',
        "&:hover": {
            transform: 'scale(1.3)',
        },

    }
    const productImageStyle = {
        width: '100%',
        height: 'auto',
        transition: 'all .3s ease-in-out',
        cursor: 'pointer',
        "&:hover": {transform: 'scale(1.2)'}
    }


    return (
        <>
            <Base>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{my: '10px'}}>
                                <CardMedia component={`img`} image={productImage} sx={{...productImageStyle}}/>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} marginY={`10px`}>
                            <Box>
                                <Typography component={`h5`} variant={`h5`}
                                            sx={{textTransform: `capitalize`}}>{Product?.name}</Typography>
                                <Typography component={`h6`} variant={`h6`}>{Product?.model}</Typography>
                                <Box component={`div`} display={`flex`} >
                                    <Typography component={`del`} variant={`h6`}
                                                sx={{color: '#949494',fontSize:'13px',mx:1}}>৳{Product?.regularPrice}</Typography>
                                    <Typography component={`h6`} variant={`h6`}
                                                sx={{color: 'primary.main', fontSize:'16px'}}>৳{Product?.salePrice}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{m: '10px', display: 'flex',}}>

                                {Product?.variants?.map((variant) => {
                                        return (
                                            <Box component={`button`} bgcolor={variant.color} sx={{...colorBtnStyle}}
                                                 onClick={handleVariantClick} data-image={variant.image}
                                                 data-stock={variant.stock} key={variant.id} data-color={variant.color} data-id={variant.id}/>
                                        )
                                    }
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Base>
        </>
    );
};


export default SingleProduct;