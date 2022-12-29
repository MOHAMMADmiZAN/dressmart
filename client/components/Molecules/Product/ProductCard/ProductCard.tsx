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
    ProductID: number,

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

    const increaseOrderCount = (id:number) => {
        setOrderCount((prevCount) => prevCount + 1);
    }
    const decreaseOrderCount = (id:number) => {
        setOrderCount((prevCount) => prevCount - 1);
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
                <Box sx={{...cardOrderOverLay}} onClick={() => !orderCount && increaseOrderCount(ProductID)}>
                    {!orderCount ?
                        <CardOrderOverLayContent sx={{width: '100%', textAlign: `center`, flexDirection: 'column'}}>
                            <Typography variant={`h6`} sx={{color: '#fff', width: '100%', fontSize: '16px'}}>
                                Add To Shopping Cart
                            </Typography>
                        </CardOrderOverLayContent> :
                        <CardOrderOverLayContent>
                            <OutlineBtn OutlineBtnIcon={<AddIcon/>} OutlineBtnOnClick={()=>increaseOrderCount(ProductID)}/>
                            <Typography variant={`h6`} sx={{m: 2, color: 'primary.main'}}>{orderCount}</Typography>
                            <OutlineBtn OutlineBtnIcon={<RemoveIcon/>} OutlineBtnOnClick={()=>decreaseOrderCount(ProductID)}
                                        isDisable={orderCount === 0}/>
                        </CardOrderOverLayContent>}
                </Box>
            </Card>

        </>
    );
}

export default memo(ProductCard);