import {Action, action, State, Thunk, thunk} from 'easy-peasy';

export type AuthState = State<Auth>;
 export type AuthAction = Action<Auth, string | object>
export type AuthThunk = Thunk<Auth, string | object>

export interface Auth {
    AuthToken: string;
    AuthUser: object;
    AuthSet: AuthAction ;
    AuthClear: AuthAction;
    Login: AuthThunk;
    Register: AuthThunk;
    Logout: AuthThunk;

}




const AuthModel: Auth = {
    AuthToken: " ",
    AuthUser: {},
    AuthSet: action((state: AuthState, payload) => {


    }),
    AuthClear: action((state: AuthState) => {
    }),
    Login: thunk(async (actions, payload) => {
        console.log(payload)
    }),
    Register: thunk(async (actions, payload) => {
    }),
    Logout: thunk(async (actions, payload) => {
    })
}

export default AuthModel