import React, {memo, useEffect, useRef, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material";
import Star from "../../Molecules/Star/Star";
import SelectedVariant from "../../Molecules/Product/SelectedVariant/SelectedVariant";
import NextLink from "next/link";
import CartActions from "../Cart/CartActions/CartActions";
import {useCartItem} from "../../../hooks/useCartItem";
import {singleProductResponse} from "../../../api/Product.api";
import {productImageStyle} from "./Product.style";
import ByCategoryAndBrandProduct from "../Products/ByCategoryAndBrandProduct/ByCategoryAndBrandProduct";

interface PRODUCT_PROPS {
    Product: singleProductResponse

}

const Product: React.FC<PRODUCT_PROPS> = ({Product}) => {

    const [selectedColor, setSelectedColor] = useState<number>(0);
    const [productImage, setProductImage] = useState<string>('');
    const categoryLinkRef = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        if (Product?.variants?.length) {
            typeof Product.variants[0].image === 'string' ? setProductImage(Product.variants[0].image) : setProductImage(Product ? Product.thumbnail : '')
        } else {
            setProductImage(Product ? Product.thumbnail : '')
        }


    }, [Product])
    const {item, index} = useCartItem(selectedColor)

    return (
        <>
            {
                Product && (
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
                                        }}>{Product.name}</Typography>
                                        <Star rating={Product.rating || 0}/>
                                    </Box>

                                    <Box component={`div`} display={`flex`} p={`0 10px`} alignItems={`center`}>
                                        <Typography component={`del`} variant={`subtitle1`} sx={{
                                            color: '#949494',
                                            fontSize: '13px',
                                            mr: 1
                                        }}>৳{Product.regularPrice}</Typography>
                                        <Typography component={`h6`} variant={`h6`} sx={{
                                            color: 'primary.main',
                                            fontSize: '16px'
                                        }}>৳{Product.salePrice}</Typography>
                                    </Box>
                                </CardContent>
                                <Divider/>
                                <CardContent sx={{display: `flex`, alignItems: `center`, justifyContent: `space-between`}}>
                                    <SelectedVariant Product={Product} categoryLinkRef={categoryLinkRef}
                                                     setProductImage={setProductImage} selectedColor={selectedColor}
                                                     setSelectedColor={setSelectedColor}/>
                                    <Box sx={{m: '10px', display: 'flex', alignItems: `center`, p: `0`}}>
                                        <Typography component={`h6`} variant={`subtitle1`}
                                                    sx={{mr: 1, fontWeight: 600}}> Brand:</Typography>
                                        <NextLink href={`/`}><Typography component={`h6`}
                                                                         variant={`h6`}>{Product.brand.name}</Typography></NextLink>
                                    </Box>
                                    <Box sx={{m: '10px', display: 'flex', alignItems: `center`, p: `0`}}>
                                        <Typography component={`h6`} variant={`subtitle1`}
                                                    sx={{mr: 1, fontWeight: 600}}> Category:</Typography>
                                        <NextLink href={`/`} ref={categoryLinkRef}><Typography component={`h6`}
                                                                                               variant={`h6`}>{Product.category.name}</Typography></NextLink>
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
                                    {Product.description.split(`.`).map((para, index) => {
                                        return (
                                            <Typography component={`p`} variant={`h6`} key={index}
                                                        sx={{p: `0 10px`}}>{para}</Typography>
                                        )
                                    })}

                                </CardContent>
                                <Divider/>
                                <CardContent>
                                    <CartActions productName={Product.name as string}
                                                 productId={Product.id as number}
                                                 productModel={Product.model as string} thumbnailUrl={productImage}
                                                 price={Product.salePrice as number} variant={selectedColor}
                                                 quantity={index === -1 ? 0 : item.quantity} rating={Product.rating}/>
                                </CardContent>
                                <Divider/>
                                <Typography component={`h6`} variant={`h6`} sx={{p: `10px`}}>
                                    You may also like
                                </Typography>
                                <Divider/>
                                <ByCategoryAndBrandProduct category={Product.category.name} brand={Product.brand.name}/>


                            </Card>
                        </Grid>
                    </Grid>
                )
            }


        </>
    );
};

export default memo(Product);