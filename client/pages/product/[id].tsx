import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import {fetchProducts, getProductById, recentProduct, singleProductResponse} from "../../api/Product.api";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import Base from "../../components/templates/Base/Base";
import {Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import Star from "../../components/Molecules/Star/Star";
import {State, useStoreState} from "easy-peasy";
import {CartType} from "../../store/models/CartModel";
import CartActions from "../../components/Organisms/Cart/CartActions/CartActions";


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
    const categoryLinkRef = useRef<HTMLAnchorElement>(null);

    const [colorBoxRefs, setColorBoxRefs] = useState<
        React.RefObject<HTMLButtonElement>[]
    >([]);

    const [selectedColor, setSelectedColor] = useState<number>(0);

    const {
        data: Product,
        isLoading,
        isError,
        error
    } = useQuery<singleProductResponse, Error>(['singleProduct', id], () => getProductById(id))
    const [productImage, setProductImage] = useState<string>('');
    useLayoutEffect(() => {
        Product?.variants && setColorBoxRefs(Product.variants.map((_) => React.createRef<HTMLButtonElement>()))

    }, [Product?.variants, Product?.variants.length])
    useEffect(() => {
        if (Product?.variants?.length) {
            typeof Product?.variants[0].image === 'string' ? setProductImage(Product.variants[0].image) : setProductImage(Product ? Product.thumbnail : '')
        } else {
            setProductImage(Product ? Product.thumbnail : '')
        }
        if (colorBoxRefs.length > 0) {
            let colorBoxRef = colorBoxRefs[0];
            // colorBoxRef.current?.focus();
            colorBoxRef.current?.click();
            categoryLinkRef.current?.setAttribute('style', `color: ${colorBoxRef.current?.getAttribute('data-color')}`)
            setSelectedColor(Number(colorBoxRef.current?.getAttribute('data-id')) || 0)

        }


    }, [Product, colorBoxRefs, colorBoxRefs.length])


    const {CartItems} = useStoreState((state: State<CartType>) => state.Cart)
    const index = CartItems.findIndex(item => item.productId === Product?.id)


    const handleVariantClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const variantImage = target.getAttribute('data-image');
        setProductImage(variantImage ? variantImage : '')
        const variantStock = target.getAttribute('data-stock');
        console.log(variantStock)
        const variantColor = target.getAttribute('data-color');
        categoryLinkRef.current?.setAttribute('style', `color: ${variantColor}`)
        setSelectedColor(Number(target.getAttribute('data-id')) || 0)


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
        }


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
                                    <Box sx={{m: '10px', display: 'flex', alignItems: `center`, p: `0`}}>
                                        <Typography component={`h6`} variant={`subtitle1`}
                                                    sx={{mr: 1, fontWeight: 600}}> Choose Color:</Typography>
                                        {Product?.variants?.map((variant, index) => {
                                                return (
                                                    <Box component={`button`} bgcolor={variant.color}
                                                         sx={{
                                                             ...colorBtnStyle,
                                                             transform: selectedColor === variant.id ? 'scale(1.3)' : 'scale(1)'
                                                         }}
                                                         onClick={handleVariantClick} data-image={variant.image}
                                                         data-stock={variant.stock} key={variant.id}
                                                         data-color={variant.color}
                                                         data-id={variant.id} ref={colorBoxRefs[index]}/>
                                                )
                                            }
                                        )}
                                    </Box>
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
                                    <CartActions productName={Product ? Product.name : ''}
                                                 productId={Product ? Product.id : 0}
                                                 productModel={Product ? Product.model : ''} thumbnailUrl={productImage}
                                                 price={Product ? Product.salePrice : 0} variant={selectedColor}
                                                 quantity={index === -1 ? 0 : CartItems[index].quantity}/>
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