import {action, Action, State, thunk, Thunk} from "easy-peasy";


type CartAction = Action<Cart, string>
type CartThunk = Thunk<Cart, string | undefined>

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

type CartState = State<Cart>;

const CartModel: Cart = {
    CartId: "",
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