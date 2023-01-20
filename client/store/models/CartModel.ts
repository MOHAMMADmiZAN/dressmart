import {action, Action, State, thunk, Thunk} from "easy-peasy";
import {CartRequest} from "../../api/Cart.api";


export type CartType = {
    Cart: typeof CartModel
}

export type ProductPayload = {
    productId: number;
    productName: string,
    productModel: string,
    thumbnailUrl: string,
    price: number,
    quantity: number;
    variant: number;
}

type CartAction<T> = Action<Cart, T>
type CartThunk<T> = Thunk<Cart, T>
type CartState = State<Cart>;

interface Cart {
    CartId: number;
    CartItems: Array<ProductPayload>;
    AddProduct: CartAction<ProductPayload>;
    RemoveProduct: CartAction<ProductPayload>;
    AddProductThunk: CartThunk<ProductPayload>;
    RemoveProductThunk: CartThunk<ProductPayload>;
    incrementProductQuantity: CartAction<ProductPayload>;
    decrementProductQuantity: CartAction<ProductPayload>;
    ProductQuantityThunk: CartThunk<ProductPayload>;
    SetDataBaseCart: CartAction<ProductPayload>;
    ClearCart: CartAction<ProductPayload>;
    DeleteCartThunk: CartThunk<ProductPayload>;
    SetCartId: CartAction<string>;
    SetCartItem: CartAction<any>
    DecreaseProductThunk: CartThunk<ProductPayload>
}


// To find the index of the product in the cart
const IsInCart = (cartItems: Cart["CartItems"], payload: ProductPayload) => {
    return cartItems.findIndex((v) => v.productId === payload.productId)
}


const CartModel: Cart = {
    CartId: 0,
    CartItems: [],

    AddProduct: action((state: CartState, payload) => {

        const index = IsInCart(state.CartItems, payload)
        console.log(index)

        if (index === -1) {
            payload.quantity = 1
            state.CartItems.push(payload);
        } else {
            state.CartItems[index].quantity = state.CartItems[index].quantity + 1
            state.CartItems = [...state.CartItems]
        }
    }),

    RemoveProduct: action((state: CartState, payload) => {
        state.CartItems = state.CartItems.filter(item => item.productId != payload.productId)
        state.CartId = 0
    }),

    SetCartItem: action((state: CartState, payload) => {
        state.CartItems = payload.products
    }),

    AddProductThunk: thunk(async (actions, payload, {getState}) => {
        let state = getState();
        let haveCartInDb = await CartRequest.getCart(state.CartId)
        if (!haveCartInDb) {
            payload.quantity = 1
            try {
                let res = await CartRequest.createCart({products: [payload]})
                actions.AddProduct(res.ProductResponse)
                actions.SetCartId(res.CartId.toString())

            }catch (e) {
                console.log(e)
            }

        }
        if (haveCartInDb) {
            const index = IsInCart(state.CartItems ,payload)
            if (index === -1) {
                payload.quantity = 1
                let res = await CartRequest.updateCart(state.CartId, { products: [...state.CartItems, payload] })
                actions.SetCartItem(res.data.attributes)
            } else {
                state.CartItems[index].quantity = state.CartItems[index].quantity + 1
                let res = await CartRequest.updateCart(state.CartId, {products: [...state.CartItems]})
                actions.SetCartItem(res.data.attributes)

            }

            
           



        }

        

        //  check is authenticated

        //  if authenticated
        //  check if cart is in database
        //  if cart is in database
        //  add product to cart
        // -> check product is in cart
        // -> if product is in cart
        // -> update product quantity
        // -> if product is not in cart
        // -> add product to cart
        // -> if cart is not in database
        // -> create cart
        // -> add product to cart
        //


    }),


    DecreaseProductThunk: thunk(async (actions, payload, { getState }) => {
    
        let state = getState();

        const index = IsInCart(state.CartItems, payload)

        state.CartItems[index].quantity = state.CartItems[index].quantity - 1
    
        let res;
        if (state.CartItems[index].quantity > 0) {
            res = await CartRequest.updateCart(state.CartId, {products: [...state.CartItems]})
        } else {
            res = await CartRequest.updateCart(state.CartId, {products: [...state.CartItems.filter(item => item.productId != payload.productId)]})
        }
       
        actions.SetCartItem(res.data.attributes)
    }),
    

    RemoveProductThunk: thunk(async (actions, payload, { getState }) => {
        let state = getState();
        let res = await CartRequest.updateCart(state.CartId, {products: [...state.CartItems.filter(item => item.productId != payload.productId)]})
        actions.SetCartItem(res.data.attributes)
    }),


    incrementProductQuantity: action((state: CartState, payload) => {
    }),

    decrementProductQuantity: action((state: CartState, payload) => {
        console.log("decrementProductQuantity")
        console.log(payload)

        const index = IsInCart(state.CartItems, payload)

        if (state.CartItems[index].quantity > 1) {
            state.CartItems[index].quantity = state.CartItems[index].quantity - 1
            state.CartItems = [...state.CartItems]
        } else {
            state.CartItems = state.CartItems.filter(item => item.productId != payload.productId)
        }


    }),
    ProductQuantityThunk: thunk(async (actions, payload) => {

    }),
    SetDataBaseCart: action((state: CartState, payload) => {
    }),
    ClearCart: action((state: CartState, payload) => {
        state.CartItems = []
    }),
    DeleteCartThunk: thunk(async (actions, payload) => {
    }),
    SetCartId: action((state: CartState, payload) => {
        state.CartId = Number(payload)
    })

}


export default CartModel;