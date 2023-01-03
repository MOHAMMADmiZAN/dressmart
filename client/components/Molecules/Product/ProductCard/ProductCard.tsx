import React, { memo, useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Star from "../../Star/Star";
import { cardOrderOverLay, CardOrderOverLayContent, productCardStyle } from "./ProductCard.style";
import OutlineBtn from "../../../Atoms/OutlineBtn/OutlineBtn";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Actions, State, useStoreActions, useStoreState } from "easy-peasy";
import { CartType, ProductPayload } from "../../../../store/models/CartModel";
import { AuthType } from "../../../../store/models/AuthModel";

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

}


function ProductCard(ProductCardProps: ProductCardProps): JSX.Element {
    const {
        ProductCardTitle,
        ProductCardModel,
        ProductCardPrice,
        ProductCardImage,
        ProductCardRating,
        ProductCardDiscountPrice,
        ProductID
    } = ProductCardProps;
    const { CartItems } = useStoreState((state: State<CartType>) => state.Cart)
    const item = CartItems.filter((item: ProductPayload) => item.productId === ProductID)
    const [orderCount, setOrderCount] = useState<number>(item.length > 0 ? item[0].quantity : 0);
    const isAuth = useStoreState((state: State<AuthType>) => state.Auth.isAuth)
    const [productState, setProductState] = useState<ProductPayload>({
        productId: ProductID,
        productName: ProductCardTitle,
        productModel: ProductCardModel,
        thumbnailUrl: ProductCardImage,
        price: ProductCardDiscountPrice ? ProductCardDiscountPrice : ProductCardPrice,
        quantity: orderCount,


    })

    console.log(item)

    const {
        AddProduct,
        decrementProductQuantity,
        AddProductThunk
    } = useStoreActions((actions: Actions<CartType>) => actions.Cart);


    const increaseOrderCount = () => {
        setOrderCount((prev) => prev + 1);

        isAuth ? AddProductThunk(productState) : AddProduct(productState)


    }
    const decreaseOrderCount = () => {
        setOrderCount((prev) => prev - 1);
        decrementProductQuantity(productState);
    }


    return (
        <>
            <Card sx={{ ...productCardStyle }}>
                <CardMedia
                    component={`img`}
                    sx={{ height: '200px', width: '100%' }}
                    image={ProductCardImage}
                    alt={ProductCardTitle}
                />
                <CardContent>
                    <Typography variant={`h6`} sx={{ color: 'primary.contrastText', width: '100%', fontSize: '20px' }}>
                        {ProductCardTitle.toLocaleUpperCase()}
                    </Typography>
                    <Star rating={ProductCardRating} />
                    <Typography variant={`h6`} sx={{ color: 'primary.main', width: '100%', fontSize: '13px' }}>
                        ৳{ProductCardPrice}
                    </Typography>
                </CardContent>
                <Box sx={{ ...cardOrderOverLay }} onClick={() => !orderCount && increaseOrderCount()}>
                    {!orderCount ?
                        <CardOrderOverLayContent sx={{ width: '100%', textAlign: `center`, flexDirection: 'column' }}>
                            <Typography variant={`h6`} sx={{ color: '#fff', width: '100%', fontSize: '16px' }}>
                                Add To Shopping Cart
                            </Typography>
                        </CardOrderOverLayContent> :
                        <CardOrderOverLayContent>
                            <OutlineBtn OutlineBtnIcon={<AddIcon />} OutlineBtnOnClick={increaseOrderCount} />
                            <Typography variant={`h6`} sx={{ m: 2, color: 'primary.main' }}>{orderCount}</Typography>
                            <OutlineBtn OutlineBtnIcon={<RemoveIcon />} OutlineBtnOnClick={decreaseOrderCount}
                                isDisable={orderCount === 0} />
                        </CardOrderOverLayContent>}
                </Box>
            </Card>


        </>
    );
}

export default memo(ProductCard);