import {State, useStoreState} from "easy-peasy";
import {CartType} from "../store/models/CartModel";

export const useCartItem = (id?: number) => {
    const {CartItems} = useStoreState((state: State<CartType>) => state.Cart)
    const index = CartItems.findIndex(item => item.variant === id)


    return {
        index,
        item: CartItems[index],
        items: CartItems
    }
}