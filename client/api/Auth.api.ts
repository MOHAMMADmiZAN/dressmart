import {AuthApi} from "./api";
import {authResponse} from "../store/models/AuthModel";
import {RegisterFormInput} from "../components/Organisms/Auth/Register/Register";


export class AuthRequest {
    public static async login(email: string, password: string) : Promise<authResponse> {
        const response = await AuthApi.post("/", {identifier: email, password: password});
        return response.data;
    }

    public static async register(data:RegisterFormInput) : Promise<authResponse> {
        const response = await AuthApi.post("/register", data);

        return response.data;

    }
}