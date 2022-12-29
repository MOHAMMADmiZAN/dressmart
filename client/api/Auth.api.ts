import {AuthApi} from "./api";
import {authResponse} from "../store/models/AuthModel";


export class AuthRequest {
    public static async login(email: string, password: string) : Promise<authResponse> {
        const response = await AuthApi.post("/", {identifier: email, password: password});
        return response.data;
    }

    public static async register(userName: string, email: string, password: string) {
        const response = await AuthApi.post("/register", {username: userName, email: email, password: password});
        return response.data;

    }
}