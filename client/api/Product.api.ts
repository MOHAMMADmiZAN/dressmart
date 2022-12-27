// product fetch api
import {ProductApi} from "./api";

export type recentProduct = {
    id: number;
    name: string;
    variants: VariantArray

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

}

export interface VariantArray extends Array<variant> {

}

// recent products fetch api
export const fetchProducts = async () => {
    const res = await ProductApi.get("?populate[variants][populate][0]=thumbnail");
    return res.data.data.reduce((acc: any, cur: any) => {
        const {id, attributes} = cur;

        const variantData = attributes.variants.data.reduce((acc: any, cur: any) => {
            const {id, attributes} = cur;
            const imageData = attributes.thumbnail.data.reduce((acc: any, cur: any) => {
                const {id, attributes} = cur;
                acc['src'] = {
                    id,
                    url: attributes.url,
                }
                return acc;

            }, {})
            acc.push({
                id,
                value: attributes.color,
                description: attributes.description,
                regularPrice: attributes.regular_price,
                salePrice: attributes.sale_price,
                stock: attributes.stock_quantity,
                image: imageData


            })
            return acc;


        }, [])
        acc.push({id, name: attributes.name, variants: variantData});
        return acc;

    }, []);
}