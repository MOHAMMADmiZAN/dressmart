import {action, Action, thunk, Thunk} from "easy-peasy";

interface Cart {
    CartId: string;
    CartItems: [];
    AddProduct: Action<Cart, string | undefined>;
    RemoveProduct: Action<Cart, string | undefined>;
    AddProductThunk: Thunk<Cart, string | undefined>;
    RemoveProductThunk: Thunk<Cart, string | undefined>;
    incrementProductQuantity: Action<Cart, string | undefined>;
    decrementProductQuantity: Action<Cart, string | undefined>;
    ProductQuantityThunk: Thunk<Cart, string | undefined>;
    SetDataBaseCart: Action<Cart, string | [] | undefined>;
    ClearCart: Action<Cart, string | undefined>;
    DeleteCartThunk: Thunk<Cart, string | undefined>;


}


const CartModel : Cart = {
    CartId: "",
    CartItems: [],
    AddProduct: action((state, payload) => {
    }),
    RemoveProduct: action((state, payload) => {
    }),
    AddProductThunk: thunk(async (actions, payload) => {
    }),
    RemoveProductThunk: thunk(async (actions, payload) => {
    }),
    incrementProductQuantity: action((state, payload) => {
    }),
    decrementProductQuantity: action((state, payload) => {
    }),
    ProductQuantityThunk: thunk(async (actions, payload) => {
    }),
    SetDataBaseCart: action((state, payload) => {
    }),
    ClearCart: action((state, payload) => {
    }),
    DeleteCartThunk: thunk(async (actions, payload) => {
    }),

}


export default CartModel;