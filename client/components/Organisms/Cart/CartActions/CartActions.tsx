import React, {memo, useEffect, useState} from 'react';
import {Actions, State, useStoreActions, useStoreState} from "easy-peasy";
import {CartType, ProductPayload} from "../../../../store/models/CartModel";
import {AuthType} from "../../../../store/models/AuthModel";
import {Box, Typography} from "@mui/material";
import OutlineBtn from "../../../Atoms/OutlineBtn/OutlineBtn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface CART_ACTIONS_PROPS {
    productName: string,
    productId: number,
    productModel: string,
    thumbnailUrl: string,
    price: number,
    quantity: number,
    rating?: number,
    variant: number,
    BtnSxObj?: object
    isDel?: boolean


}


const CartActions: React.FC<CART_ACTIONS_PROPS> = ({
                                                       productName,
                                                       productId,
                                                       productModel,
                                                       price,
                                                       thumbnailUrl,
                                                       quantity,
                                                       variant,
                                                       BtnSxObj,
                                                       isDel
                                                   }) => {

    // const item = CartItems.filter((item: ProductPayload) => item.productId === ProductID)
    const isAuth = useStoreState((state: State<AuthType>) => state.Auth.isAuth)
    const [productState, setProductState] = useState<ProductPayload>({
        productId,
        productName,
        productModel,
        thumbnailUrl,
        price,
        quantity,
        variant


    })
    useEffect(() => {
        setProductState({
            productId,
            productName,
            productModel,
            thumbnailUrl,
            price,
            quantity,
            variant
        })


    }, [price, productId, productModel, productName, quantity, thumbnailUrl, variant])

    const {
        AddProduct,
        decrementProductQuantity,
        AddProductThunk,
        DecreaseProductThunk,
        RemoveProductThunk,
        RemoveProduct
    } = useStoreActions((actions: Actions<CartType>) => actions.Cart);


    const increaseOrderCount = () => {
        console.log(productState)
        isAuth ? AddProductThunk(productState) : AddProduct(productState)

    }

    const decreaseOrderCount = () => {
        isAuth ? DecreaseProductThunk(productState) : decrementProductQuantity(productState)
    }
    const handleRemove = () => {
        isAuth ? RemoveProductThunk(productState) : RemoveProduct(productState)
    }

    // console.log(item)
    return (
        <Box display={`flex`} alignItems={`center`}>
            <OutlineBtn OutlineBtnIcon={<AddIcon/>} OutlineBtnOnClick={increaseOrderCount} sxObj={BtnSxObj}/>
            <Typography variant={`h6`} sx={{m: 2, color: 'primary.main'}}>{quantity}</Typography>
            <OutlineBtn OutlineBtnIcon={<RemoveIcon/>} OutlineBtnOnClick={decreaseOrderCount} isDisable={quantity === 0}
                        sxObj={BtnSxObj}/>
            {isDel && <Button onClick={handleRemove} sx={{padding: '0px'}} size='small'><DeleteForeverIcon
                sx={{color: 'red'}}/> </Button>}
        </Box>
    );
};

export default memo(CartActions);