import axios, {AxiosInstance} from "axios";


const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:1337/api/" : "https://api.example.com/api/"


export const ProductApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}products`,
});

 export const AuthApi: AxiosInstance = axios.create({
   baseURL: `${baseURL}auth/local`,
 })

// posts fetch
// post fetch
