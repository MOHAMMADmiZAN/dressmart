import React, {memo, useLayoutEffect} from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Star from "../../Star/Star";
import {cardOrderOverLay, CardOrderOverLayContent, productCardStyle} from "./ProductCard.style";
import Link from "next/link";
import {useRouter} from "next/router";

interface ProductCardProps {
    ProductCardTitle: string,
    ProductCardModel: string,
    ProductCardPrice: number,
    ProductCardImage: string,
    ProductCardRating: number,
    ProductCardDiscount?: number,
    ProductCardDiscountPrice?: number,
    ProductCardDescription?: string,
    ProductCardLink?: string,
    ProductCardLinkText?: string,
    ProductID: number,
    ImageStyle?: object

}


function ProductCard(ProductCardProps: ProductCardProps): JSX.Element {
    const {
        ProductCardTitle,
        ProductCardModel,
        ProductCardPrice,
        ProductCardImage,
        ProductCardRating,
        ProductCardDiscountPrice,
        ProductID,
        ImageStyle
    } = ProductCardProps;
    const Router = useRouter();


    const handleSingleProduct = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        Router.push(`/product/${ProductID}`).then(r => console.log(r))
    }
    return (
        <>
            <Card sx={{...productCardStyle}}>
                <CardMedia
                    component={`img`}
                    sx={{height: '200px', width: '100%',...ImageStyle}}
                    image={ProductCardImage}
                    alt={ProductCardTitle}
                />
                <CardContent>
                    <Typography variant={`h6`} sx={{color: 'primary.contrastText', width: '100%', fontSize: '20px'}}>
                        {ProductCardTitle.toLocaleUpperCase()}
                    </Typography>
                    <Star rating={ProductCardRating}/>
                    <Typography variant={`h6`} sx={{color: 'primary.main', width: '100%', fontSize: '13px'}}>
                        ৳{ProductCardPrice}
                    </Typography>
                </CardContent>
                <Box sx={{...cardOrderOverLay}} onClick={handleSingleProduct}>
                    <CardOrderOverLayContent sx={{width: '100%', textAlign: `center`, flexDirection: 'column'}}>
                        <Link href={`/product/${ProductID}`}> <Typography variant={`h6`} sx={{
                            color: '#fff',
                            width: '100%',
                            fontSize: '16px',
                            height: '100%',
                        }}>
                            Go to Product Details
                        </Typography></Link>
                    </CardOrderOverLayContent>
                </Box>
            </Card>


        </>
    );
}

export default memo(ProductCard);