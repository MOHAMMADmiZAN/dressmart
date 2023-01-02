import {createStore, persist} from "easy-peasy";
import AuthModel from "./models/AuthModel";
import CartModel from "./models/CartModel";


 export interface StoreModel {
    Auth: typeof AuthModel;
    Cart: typeof CartModel;
}


const store =  createStore<StoreModel>({
    // ... Auth model //
    Auth: persist(AuthModel, {storage: "localStorage"}),
    // ... Cart model //
    Cart: persist(CartModel, {storage: "localStorage"}),
})

export default store;