import React, {useState} from 'react';
import {Actions, State, useStoreActions, useStoreState} from "easy-peasy";
import {CartType} from "../../../../store/models/CartModel";
import {AuthType} from "../../../../store/models/AuthModel";
import {Box, Typography} from "@mui/material";
import OutlineBtn from "../../../Atoms/OutlineBtn/OutlineBtn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CART_ACTIONS_PROPS {
    productName: string;
    productId: number;
    productModel: string;
    thumbnailUrl: string;
    price: number;
    quantity: number;
    rating?: number;
    variant: number;


}


const CartActions: React.FC<CART_ACTIONS_PROPS> = ({
                                                       productName,
                                                       productId,
                                                       productModel,
                                                       price,
                                                       thumbnailUrl,
                                                       quantity,
                                                       variant
                                                   }) => {

    // const item = CartItems.filter((item: ProductPayload) => item.productId === ProductID)
    const isAuth = useStoreState((state: State<AuthType>) => state.Auth.isAuth)
    const [productState, setProductState] = useState<CART_ACTIONS_PROPS>({
        productId,
        productName,
        productModel,
        thumbnailUrl,
        price,
        quantity,
        variant


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
       <Box display={`flex`}>
           <OutlineBtn OutlineBtnIcon={<AddIcon />} OutlineBtnOnClick={increaseOrderCount} />
           <Typography variant={`h6`} sx={{ m: 2, color: 'primary.main' }}>{quantity}</Typography>
           <OutlineBtn OutlineBtnIcon={<RemoveIcon />} OutlineBtnOnClick={decreaseOrderCount}
                       isDisable={quantity === 0} />
       </Box>
    );
};

export default CartActions;