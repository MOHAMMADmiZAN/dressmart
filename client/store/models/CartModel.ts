import {action, Action, State, thunk, Thunk} from "easy-peasy";
import {generateUUID} from "../../utils/Helper";


export type CartType = {
    Cart: typeof CartModel
}

 type AddProductThunkPayload = {
    productId: number;
    quantity: number;
 }

type CartAction = Action<Cart, any>
type CartThunk = Thunk<Cart,any>
type CartState = State<Cart>;

interface Cart {
    CartId: string;
    CartItems: Array<object>;
    AddProduct: CartAction;
    RemoveProduct: CartAction;
    AddProductThunk: Thunk<Cart,AddProductThunkPayload>;
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
        state.CartItems.push(payload);
        if (state.CartId === " ") {
            state.CartId = generateUUID();
        }
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