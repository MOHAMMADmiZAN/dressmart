import React, {memo, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Star from "../../Star/Star";
import {cardOrderOverLay, CardOrderOverLayContent, productCardStyle} from "./ProductCad.style";
import OutlineBtn from "../../../Atoms/OutlineBtn/OutlineBtn";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
        ProductCardDiscountPrice
    } = ProductCardProps;

    const [orderCount, setOrderCount] = useState(0);

    const increaseOrderCount = () => {
        setOrderCount((prevCount) => prevCount + 1);
        console.log(orderCount);
    }
    const decreaseOrderCount = () => {
        setOrderCount((prevCount) => prevCount - 1);
        console.log(orderCount);
    }

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
                <Box sx={{...cardOrderOverLay}}>
                    <CardOrderOverLayContent>
                        <OutlineBtn OutlineBtnIcon={<AddIcon/>} OutlineBtnOnClick={increaseOrderCount}/>
                        <Typography variant={`h6`} sx={{m: 2, color: 'primary.main'}}>{orderCount}</Typography>
                        <OutlineBtn OutlineBtnIcon={<RemoveIcon/>} OutlineBtnOnClick={decreaseOrderCount}
                                    isDisable={orderCount === 0}/>
                    </CardOrderOverLayContent>
                </Box>
            </Card>

        </>
    );
}

export default memo(ProductCard);