import { URL } from '../../constants';

// Action creators
export const loginRequest = () => {
    return {
        type: 'LOGIN_REQUEST',
    }
}
export const loginSuccess = (token) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: token
    }
}
export const loginFailure = (msgError) => {
    return {
        type: 'LOGIN_FAILURE',
        payload: msgError
    }
}
export const loginLogout = () => {
    return {
        type: 'LOGOUT',
    }
}

// Actions
export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        const user = {
            email: email,
            password: password
        };
        fetch(URL + '/login', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            resStatus = res.status;
            return res.json();
        })
        .then(res => {
            switch (resStatus) {
                case 200:
                    dispatch(loginSuccess(res.token));
                    break;
                default:
                    dispatch(loginFailure(res.error));
                    break;
            }
        })
        .catch(error => {
            dispatch(loginFailure("Ocurrió un error"));
        });
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(loginLogout());
    }
}