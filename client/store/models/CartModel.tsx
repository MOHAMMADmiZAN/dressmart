import {action, Action, State, thunk, Thunk} from "easy-peasy";


type CartAction = Action<Cart, string | object>
type CartThunk = Thunk<Cart, string | object>
type CartState = State<Cart>;

interface Cart {
    CartId: string;
    CartItems: Array<object>;
    AddProduct: CartAction;
    RemoveProduct: CartAction;
    AddProductThunk: CartThunk;
    RemoveProductThunk: CartThunk;
    incrementProductQuantity: CartAction;
    decrementProductQuantity: CartAction;
    ProductQuantityThunk: CartThunk;
    SetDataBaseCart: CartAction;
    ClearCart: CartAction;
    DeleteCartThunk: CartThunk;


}



const CartModel: Cart = {
    CartId: " ",
    CartItems: [],
    AddProduct: action((state: CartState, payload) => {
    }),
    RemoveProduct: action((state: CartState, payload) => {
    }),
    AddProductThunk: thunk(async (actions, payload) => {

    }),
    RemoveProductThunk: thunk(async (actions, payload) => {
    }),
    incrementProductQuantity: action((state: CartState, payload) => {
    }),
    decrementProductQuantity: action((state: CartState, payload) => {
    }),
    ProductQuantityThunk: thunk(async (actions, payload) => {
    }),
    SetDataBaseCart: action((state: CartState, payload) => {
    }),
    ClearCart: action((state: CartState, payload) => {
    }),
    DeleteCartThunk: thunk(async (actions, payload) => {
    }),

}


export default CartModel;