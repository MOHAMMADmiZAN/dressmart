import axios, {AxiosInstance} from "axios";

const baseURL = "http://localhost:1337/api/";
export const jsonPlaceHolder: AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const ProductApi: AxiosInstance = axios.create({
    baseURL: `${baseURL}products`,
});

// posts fetch


// post fetch
