import {CartApi} from "./api";
import GetJwt from "../utils/GetJwt";
import {ProductPayload} from "../store/models/CartModel";

const jwt = GetJwt()

CartApi.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

type  fetchCartPayload = {
    productId: number;
    productName: string,
    productModel: string,
    thumbnailUrl: string,
    price: number,
    quantity: number;
}

export class CartRequest {
    static async createCart(data: { products: ProductPayload[] }): Promise<unknown> {
        try {
            const cart = await CartApi.post("/", {data: data})
            const ProductResponse = cart.data.products.reduce((acc: fetchCartPayload, cur: ProductPayload) => {
                acc["productId"] = Number(cur.productId)
                acc["productName"] = cur.productName
                acc["productModel"] = cur.productModel
                acc["thumbnailUrl"] = cur.thumbnailUrl
                acc["price"] = Number(cur.price)
                acc["quantity"] = Number(cur.quantity)

                return acc
            }, {})
            return {
                CartId: cart.data.id,
                ProductResponse
            }

        } catch (e) {
            console.log(e)
        }
    }

    // get a cart
    static async getCart(id: number): Promise<boolean> {
        try {
            return id ? (await CartApi.get(`/${id}`)).data.data.length !== 0 : false;
        } catch (e) {
            return false;
        }


    }

    // update a cart
    static async updateCart(id: number, data: { products: ProductPayload[] }) {
        try {
            const cart = await CartApi.put(`/${id}`, {data: data})
            return cart.data
        } catch (e) {
            return e
        }
    }

    // delete a cart
    static async deleteCart(id: number) {
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