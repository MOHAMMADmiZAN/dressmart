import {Action, action, State, Thunk, thunk} from 'easy-peasy';

type AuthState = State<Auth>;
type AuthAction = Action<Auth, string | object>
type AuthThunk = Thunk<Auth, string | object>

interface Auth {
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
    }),
    Register: thunk(async (actions, payload) => {
    }),
    Logout: thunk(async (actions, payload) => {
    })
}

export default AuthModel