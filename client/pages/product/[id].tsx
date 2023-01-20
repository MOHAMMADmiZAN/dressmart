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
    const categoryLinkRef = useRef<HTMLAnchorElement>(null);


    const {
        data: Product
    } = useQuery<singleProductResponse, Error>(['singleProduct', id], () => getProductById(id))

    const [selectedColor, setSelectedColor] = useState<number>(0);

    const [productImage, setProductImage] = useState<string>('');
    useEffect(() => {
        if (Product?.variants?.length) {
            typeof Product?.variants[0].image === 'string' ? setProductImage(Product.variants[0].image) : setProductImage(Product ? Product.thumbnail : '')
        } else {
            setProductImage(Product ? Product.thumbnail : '')
        }


    }, [Product])
    const {item, index} = useCartItem(selectedColor)
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
                <Head>
                    <title>{Product?.name || `Not Found`}</title>
                    <meta name="description" content={Product?.metaData || `Not Found`}/>
                    <meta name="keywords" content={Product?.metaTags || `Not Found`}/>
                    <meta name="author" content="DressMart"/>
                </Head>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{my: '10px'}}>
                                <CardMedia component={`img`} image={productImage} sx={{...productImageStyle}}/>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} marginY={`10px`}>
                            <Card>
                                <CardContent>
                                    <Box display={`flex`} alignItems={`center`} justifyContent={`space-between`}>
                                        <Typography component={`h2`} variant={`h2`} sx={{
                                            textTransform: `capitalize`,
                                            color: `primary.dark`, p: `5px`,
                                        }}>{Product?.name}</Typography>
                                        <Star rating={Product?.rating || 0}/>
                                    </Box>

                                    <Box component={`div`} display={`flex`} p={`0 10px`} alignItems={`center`}>
                                        <Typography component={`del`} variant={`subtitle1`} sx={{
                                            color: '#949494',
                                            fontSize: '13px',
                                            mr: 1
                                        }}>৳{Product?.regularPrice}</Typography>
                                        <Typography component={`h6`} variant={`h6`} sx={{
                                            color: 'primary.main',
                                            fontSize: '16px'
                                        }}>৳{Product?.salePrice}</Typography>
                                    </Box>
                                </CardContent>
                                <Divider/>
                                <CardContent
                                    sx={{display: `flex`, alignItems: `center`, justifyContent: `space-between`}}>
                                    <SelectedVariant Product={Product} categoryLinkRef={categoryLinkRef}
                                                     setProductImage={setProductImage} selectedColor={selectedColor}
                                                     setSelectedColor={setSelectedColor}/>
                                    <Box sx={{m: '10px', display: 'flex', alignItems: `center`, p: `0`}}>
                                        <Typography component={`h6`} variant={`subtitle1`}
                                                    sx={{mr: 1, fontWeight: 600}}> Category:</Typography>
                                        <NextLink href={`/`} ref={categoryLinkRef}><Typography component={`h6`}
                                                                                               variant={`h6`}>{Product?.category.name}</Typography></NextLink>
                                    </Box>
                                </CardContent>
                                <Divider/>
                                <CardContent sx={{
                                    transition: `all .3s ease-in-out`,
                                    cursor: `pointer`,
                                    "&:hover": {bgcolor: '#FFFFF6'}
                                }}>
                                    <Typography component={`p`} variant={`h5`} sx={{p: `10px`,}}>Product
                                        description:</Typography>
                                    {Product?.description.split(`.`).map((para, index) => {
                                        return (
                                            <Typography component={`p`} variant={`h6`} key={index}
                                                        sx={{p: `0 10px`}}>{para}</Typography>
                                        )
                                    })}

                                </CardContent>
                                <CardContent>
                                    <CartActions productName={Product?.name as string}
                                                 productId={Product?.id as number}
                                                 productModel={Product?.model as string} thumbnailUrl={productImage}
                                                 price={Product?.salePrice as number} variant={selectedColor}
                                                 quantity={index === -1 ? 0 : item.quantity} rating={Product?.rating}/>
                                </CardContent>
                                <Divider/>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Base>
        </>
    );
};


export default SingleProduct;