import React, {memo, useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Star from "../../Star/Star";
import {cardOrderOverLay, CardOrderOverLayContent, productCardStyle} from "./ProductCard.style";
import OutlineBtn from "../../../Atoms/OutlineBtn/OutlineBtn";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Actions, State, useStoreActions, useStoreState} from "easy-peasy";
import {CartType} from "../../../../store/models/CartModel";
import {any} from "prop-types";

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
    ProductID: number,

}


 interface ProductState  {
    ProductID: number,
    ProductCount: number
 }

function ProductCard(ProductCardProps: ProductCardProps): JSX.Element {
    const {
        ProductCardTitle,
        ProductCardPrice,
        ProductCardImage,
        ProductCardRating,
        ProductCardDiscountPrice,
        ProductID
    } = ProductCardProps;

    const [orderCount, setOrderCount] = useState(0);

    const {AddProduct} = useStoreActions((actions: Actions<CartType>) => actions.Cart);




    const increaseOrderCount = () => {
        setOrderCount((prevCount) => prevCount + 1);
        AddProduct({ProductID, ProductCount: orderCount + 1});


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
                    <Typography variant={`h6`} sx={{color: 'primary.contrastText', width: '100%', fontSize: '20px'}}>
                        {ProductCardTitle.toLocaleUpperCase()}
                    </Typography>
                    <Star rating={ProductCardRating}/>
                    <Typography variant={`h6`} sx={{color: 'primary.main', width: '100%', fontSize: '13px'}}>
                        ৳{ProductCardPrice}
                    </Typography>
                </CardContent>
                <Box sx={{...cardOrderOverLay}} onClick={() => !orderCount && increaseOrderCount()}>
                    {!orderCount ?
                        <CardOrderOverLayContent sx={{width: '100%', textAlign: `center`, flexDirection: 'column'}}>
                            <Typography variant={`h6`} sx={{color: '#fff', width: '100%', fontSize: '16px'}}>
                                Add To Shopping Cart
                            </Typography>
                        </CardOrderOverLayContent> :
                        <CardOrderOverLayContent>
                            <OutlineBtn OutlineBtnIcon={<AddIcon/>} OutlineBtnOnClick={increaseOrderCount}/>
                            <Typography variant={`h6`} sx={{m: 2, color: 'primary.main'}}>{orderCount}</Typography>
                            <OutlineBtn OutlineBtnIcon={<RemoveIcon/>} OutlineBtnOnClick={decreaseOrderCount}
                                        isDisable={orderCount === 0}/>
                        </CardOrderOverLayContent>}
                </Box>
            </Card>


        </>
    );
}

export default memo(ProductCard);