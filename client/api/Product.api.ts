// product fetch api
import {ProductApi} from "./api";



export const fetchProducts = async () => {
    const res = await ProductApi.get("?populate[variants][populate][0]=thumbnail");
    return res.data;
}