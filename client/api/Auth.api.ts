import {AuthApi} from "./api";


export class Auth {
    public static async login(email: string, password: string) {
        const response = await AuthApi.post("/", {identifier: email, password: password});
        return response.data;
    }

    public static async register(userName: string, email: string, password: string) {
        const response = await AuthApi.post("/register", {username: userName, email: email, password: password});
        return response.data;

    }
}