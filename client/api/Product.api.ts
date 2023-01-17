// product fetch api
import {ProductApi} from "./api";
import {sanitizeId} from "../utils/Helper";

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
    color: string;
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

export interface singleProductResponse {
    id: number;
    name: string;
    slug: string;
    model: string;
    description: string;
    thumbnail: string;
    rating: number;
    regularPrice: number;
    salePrice: number;
    variants: variant[];
    category: category;
    brand: brand;
    metaData: string;
    metaTags: string;


}

declare type idType = string | number | unknown;

interface category {
    id: number;
    name: string;
    thumbnail: string;
}

interface brand {
    id: number;
    name: string;
    thumbnail: string;
}


export interface recentProductArray extends Array<recentProduct> {
}

export interface VariantArray extends Array<variant> {

}

// recent products fetch api
export const fetchProducts = async (): Promise<recentProductArray> => {
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

export const getProductById = async (id: idType): Promise<singleProductResponse> => {
    let res = await ProductApi.get(`/${sanitizeId(id)}?populate[category][populate]=thumbnail&populate=thumbnail&populate[brand][populate]=thumbnail&populate[variants][populate]=thumbnail`);
    return {
        id: res.data.data.id,
        name: res.data.data.attributes.name,
        model: res.data.data.attributes.model,
        slug: res.data.data.attributes.slug,
        regularPrice: res.data.data.attributes.regular_price,
        salePrice: res.data.data.attributes.sell_price,
        description: res.data.data.attributes.fabric_details,
        rating: res.data.data.attributes.avarage_rating,
        metaData: res.data.data.attributes.meta_data,
        metaTags: res.data.data.attributes.meta_tag,
        brand: {
            id: res.data.data.attributes.brand.data.id,
            name: res.data.data.attributes.brand.data.attributes.name,
            thumbnail: res.data.data.attributes.brand.data.attributes.thumbnail.data[0].attributes.url
        },
        category: {
            id: res.data.data.attributes.category.data.id,
            name: res.data.data.attributes.category.data.attributes.name,
            thumbnail: res.data.data.attributes.category.data.attributes.thumbnail.data.attributes.url

        }
        ,
        thumbnail: res.data.data.attributes.thumbnail.data[0].attributes.url,
        variants: res.data.data.attributes.variants.data.reduce((acc: any, cur: any) => {
            const {id, attributes} = cur;
            acc.push({
                id,
                color: attributes.color,
                stock: attributes.stock_quantity,
                image: attributes.thumbnail.data[0].attributes.url
            })
            return acc;
        }, [])


    }


}