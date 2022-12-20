import {Action, action, State, Thunk, thunk} from 'easy-peasy';


type AuthAction = Action<Auth, string>
type AuthThunk = Thunk<Auth, string|undefined>

interface Auth {
    AuthToken: string;
    AuthUser: object;
    AuthSet: AuthAction;
    AuthClear: AuthAction;
    Login: AuthThunk;
    Register: AuthThunk;
    Logout: Thunk<Auth, string | undefined>;

}
 // Auth State //
type AuthState = State<Auth>;

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