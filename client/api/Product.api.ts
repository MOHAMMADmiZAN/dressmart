// product fetch api
import {ProductApi} from "./api";

export type recentProduct = {
    id: number;
    name: string;
    slug: string;
    model: string;
    thumbnail: string;
    rating: number;
    regularPrice: number;
    salePrice: number;

}


type variant = {
    id: number;
    value: string;
    description: string;
    regularPrice: number;
    salePrice: number;
    stock: string;
    image: image;
}
type image = {
    src: src;
}
type src = {
    url: string;
    id: number;
}

export interface recentProductArray extends Array<recentProduct> {
    rating: number;
    thumbnail: string;

}

export interface VariantArray extends Array<variant> {

}

// recent products fetch api
export const fetchProducts = async () => {
    const res = await ProductApi.get("?populate=thumbnail");
    return res.data.data.reduce((acc: any, cur: any) => {
        const {id, attributes} = cur;

        acc.push({
            id,
            name: attributes.name,
            model: attributes.model,
            slug: attributes.slug,
            regularPrice: attributes.regular_price,
            salePrice: attributes.sell_price,
            thumbnail: attributes.thumbnail.data[0].attributes.url,
            rating: attributes.avarage_rating

        })

        return acc;

    }, []);
}