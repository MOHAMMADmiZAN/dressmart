import {Action, action, Thunk, thunk} from 'easy-peasy';

interface Auth {
    AuthToken: string;
    AuthUser: object;
    AuthSet: Action<Auth, string>;
    AuthClear: Action<Auth, string>;
    Login: Thunk<Auth, string | undefined>;
    Register: Thunk<Auth, string | undefined>;
    Logout: Thunk<Auth, string | undefined>;

}

const AuthModel: Auth = {
    AuthToken: '',
    AuthUser: {},
    AuthSet: action((state, payload) => {}),
    AuthClear: action(state => {}),
    Login: thunk(async (actions, payload) => {}),
    Register: thunk(async (actions, payload) => {}),
    Logout: thunk(async (actions, payload) => {})
}

export default AuthModel