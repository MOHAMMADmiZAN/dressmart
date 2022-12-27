import axios, {AxiosInstance} from "axios";

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:1337/api/" : "https://api.example.com/api/"
export const jsonPlaceHolder: AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const ProductApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}products`,
});

// posts fetch

// post fetch
