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
    const index = CartItems.findIndex(item => item.productId === ProductID)
    // const item = CartItems.filter((item: ProductPayload) => item.productId === ProductID)
    const isAuth = useStoreState((state: State<AuthType>) => state.Auth.isAuth)
    const [productState, setProductState] = useState<ProductPayload>({
        productId: ProductID,
        productName: ProductCardTitle,
        productModel: ProductCardModel,
        thumbnailUrl: ProductCardImage,
        price: ProductCardDiscountPrice ? ProductCardDiscountPrice : ProductCardPrice,
        quantity: index === -1 ? 0 : CartItems[index].quantity,


    })

    const {
        AddProduct,
        decrementProductQuantity,
        AddProductThunk,
        DecreaseProductThunk
    } = useStoreActions((actions: Actions<CartType>) => actions.Cart);


    const increaseOrderCount = () => {
        isAuth ? AddProductThunk(productState) : AddProduct(productState)
    }

    const decreaseOrderCount = () => {
        isAuth ? DecreaseProductThunk(productState) : decrementProductQuantity(productState)
    }

    // console.log(item)

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
                <Box sx={{ ...cardOrderOverLay }} onClick={() => index === -1 && increaseOrderCount()}>
                    {index === -1 ?
                        <CardOrderOverLayContent sx={{ width: '100%', textAlign: `center`, flexDirection: 'column' }}>
                            <Typography variant={`h6`} sx={{ color: '#fff', width: '100%', fontSize: '16px' }}>
                                Add To Shopping Cart
                            </Typography>
                        </CardOrderOverLayContent> :
                        <CardOrderOverLayContent>
                            <OutlineBtn OutlineBtnIcon={<AddIcon />} OutlineBtnOnClick={increaseOrderCount} />
                            <Typography variant={`h6`} sx={{ m: 2, color: 'primary.main' }}>{CartItems[index].quantity}</Typography>
                            <OutlineBtn OutlineBtnIcon={<RemoveIcon />} OutlineBtnOnClick={decreaseOrderCount}
                                isDisable={CartItems[index].quantity === 0} />
                        </CardOrderOverLayContent>}
                </Box>
            </Card>


        </>
    );
}

export default memo(ProductCard);