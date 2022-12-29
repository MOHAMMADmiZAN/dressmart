import {Action, action, State, Thunk, thunk} from 'easy-peasy';
import {AuthRequest} from "../../api/Auth.api";

export  type AuthType = {
    Auth: typeof AuthModel
}

type loginPayload = {
    email: string;
    password: string;
}
type registerPayload = {
    email: string;
    password: string;
    username: string;
    phone: string;
    confirmPassword?: string;
}
type User = {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    email: string;
    id: number;
    provider: string;
    phone: string;
    updatedAt: string;
    username: string;

}

export type authResponse = {
    jwt: string;
    user: User;
}

// gene

type AuthState = State<Auth>;
type AuthAction<T> = Action<Auth, T>
type AuthThunk<T> = Thunk<Auth, T>

export interface Auth {
    isAuth: boolean;
    AuthToken: string;
    AuthUser: object;
    AuthSet: Action<Auth, authResponse>;
    AuthClear: AuthAction<void>;
    Login: AuthThunk<loginPayload>;
    Register: AuthThunk<registerPayload>;
    Logout: AuthThunk<void>;

}


const AuthModel: Auth = {
    isAuth: false,
    AuthToken: " ",
    AuthUser: {},
    AuthSet: action((state: AuthState, payload) => {
        state.AuthToken = payload.jwt;
        state.AuthUser = payload.user;
        state.isAuth = true;

    }),
    AuthClear: action((state: AuthState) => {
        state.AuthToken = " ";
        state.AuthUser = {};
        state.isAuth = false;
    }),
    Login: thunk(async (actions, payload) => {
        const {email, password} = payload;
        const data = await AuthRequest.login(email, password)
        actions.AuthSet(data)
        return !!data


    }),
    Register: thunk(async (actions, payload) => {
        const {confirmPassword, ...rest} = payload
        const data = await AuthRequest.register(rest)
        actions.AuthSet(data)
        return !!data

    }),
    Logout: thunk(async (actions, payload) => {
        actions.AuthClear()
    })
}

export default AuthModel