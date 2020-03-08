import {AuthApi} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const LOGIN_IS_FETCHING = "LOGIN-IS-FETCHING";


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

export const setAuthUserData = (usersId, login, email, isAuth ) => ({type: SET_USER_DATA,
    data:{usersId, login, email, isAuth} });

export const getAuthUserDataThunk = () => ((dispatch) => {
    AuthApi.myAuth().then(data => {
        if (data.resultCode === 0) {
            let {id,  login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true ));
        }
    });
} );

export const login = (email, password, rememberMe) => ((dispatch) => {
    AuthApi.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserDataThunk());

        }
    });
} );

export const logout = (email, password, rememberMe) => ((dispatch) => {
    AuthApi.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
} );

export default authReducer;