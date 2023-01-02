import {CartApi} from "./api";
import jwt from "../utils/GetJwt";
import {ProductPayload} from "../store/models/CartModel";

CartApi.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

export class CartRequest {
    static async createCart(data: { products: ProductPayload[] }) {
        try {
            const cart = await CartApi.post("/", {data: data})
            return cart.data
        } catch (e) {
            return e
        }
    }

    // get a cart
    static async getCart(id: string) {
        try {
            const cart = await CartApi.get(`/${id}`)
            return cart.data
        } catch (e) {
            return e
        }
    }

    // update a cart
    static async updateCart<T>(id: string, data: T) {
        try {
            const cart = await CartApi.put(`/${id}`, data)
            return cart.data
        } catch (e) {
            return e
        }
    }

    // delete a cart
    static async deleteCart(id: string) {
        try {
            const cart = await CartApi.delete(`/${id}`)
            return cart.data
        } catch (e) {
            return e
        }
    }

    // get all carts
    static async getAllCarts() {
        try {
            const carts = await CartApi.get("/")
            return carts.data
        } catch (e) {
            return e
        }
    }
}