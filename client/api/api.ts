import axios, {AxiosInstance} from "axios";
import GetJwt from "../utils/GetJwt";

let jwt = GetJwt()

const baseURL = process.env.BASE_URL || "http://127.0.0.1:1337/api/";



export const ProductApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}products`,
});

export const AuthApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}auth/local`
})


// This instance will only use in authenticated calls and those calls should not be initial page loading times
export const AuthorizedApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}`,
    headers: {
        Authorization: `Bearer ${jwt}`,
    },
});

export const CartApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}carts`
})
//


// posts fetch
// post fetch
