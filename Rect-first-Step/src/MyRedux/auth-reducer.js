import {AuthApi} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "4-buddy.net/auth/SET-USER-DATA";

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {

        switch (action.type) {
            case SET_USER_DATA: {
                return {
                    ...state,
                    ...action.data,
                };
            }

            default:
                return state;
        }
    }
;

export const setAuthUserData = (usersId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {usersId, login, email, isAuth}
});

export const getAuthUserDataThunk = () => (async (dispatch) => {
    const responseData = await AuthApi.myAuth();
    if (responseData.resultCode === 0) {
        let {id, login, email} = responseData.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
});

export const login = (email, password, rememberMe) => (async (dispatch) => {
    const responseData = await AuthApi.login(email, password, rememberMe)
    if (responseData.resultCode === 0) {
        dispatch(getAuthUserDataThunk());
    } else {
        let message = responseData.messages.length > 0 ? responseData.messages[0] : "Some Error"
        let actionForReduxForm = stopSubmit("login", {_error: message});
        dispatch(actionForReduxForm);
    }
});

export const logout = (email, password, rememberMe) => (async (dispatch) => {
    // debugger
    const responseData = await AuthApi.logout()
    if (responseData.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
});

export default authReducer;