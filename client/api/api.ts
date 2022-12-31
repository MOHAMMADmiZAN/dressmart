import axios, {AxiosInstance} from "axios";
import jwt from "../utils/GetJwt";



const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:1337/api/" : "https://api.example.com/api/"


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



// posts fetch
// post fetch
