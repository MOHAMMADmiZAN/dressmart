import {createStore, persist} from "easy-peasy";
import AuthModel from "./models/AuthModel";
import CartModel from "./models/CartModel";


const store =  createStore({
    // ... Auth model //
    Auth: persist(AuthModel, {storage: "localStorage"}),
    // ... Cart model //
    Cart: persist(CartModel, {storage: "localStorage"}),
})

export default store;