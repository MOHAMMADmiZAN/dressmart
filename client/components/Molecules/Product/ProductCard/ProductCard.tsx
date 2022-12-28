import React, {memo} from 'react';
import {Card, CardContent, CardMedia} from "@mui/material";
import Star from "../../Star/Star";
import {productCardStyle} from "./ProductCars.style";

interface ProductCardProps {
    ProductCardTitle: string,
    ProductCardPrice?: number,
    ProductCardImage: string,
    ProductCardRating: number,
    ProductCardDiscount?: number,
    ProductCardDiscountPrice?: number,
    ProductCardDescription?: string,
    ProductCardLink?: string,
    ProductCardLinkText?: string,

}

function ProductCard(ProductCardProps: ProductCardProps): JSX.Element {
    const {
        ProductCardTitle,
        ProductCardPrice,
        ProductCardImage,
        ProductCardRating,
        ProductCardDiscount,
        ProductCardDiscountPrice
    } = ProductCardProps;
    return (
        <>
            <Card sx={{...productCardStyle}}>
                <CardMedia
                    component={`img`}
                    sx={{height: '200px', width: '100%'}}
                    image={ProductCardImage}
                    alt={ProductCardTitle}
                />
                <CardContent>
                    <h3>{ProductCardTitle}</h3>
                    <Star rating={ProductCardRating}/>
                    <p>{ProductCardPrice}</p>
                </CardContent>
            </Card>

        </>
    );
}

export default memo(ProductCard);