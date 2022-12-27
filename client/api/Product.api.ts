// product fetch api
import {ProductApi} from "./api";

export const fetchProducts = async () => {
    const res = await ProductApi.get("?populate=*");
    return res.data;
}