import {AuthApi} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const LOGIN_IS_FETCHING = "LOGIN-IS-FETCHING";


let initialState = {
    usersId: null,
    email: null,  //blabla@blabla,
    login: null,  //samurai,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {

        switch (action.type) {
            case SET_USER_DATA: {
                return {
                    ...state,
                    ...action.data,
                    isAuth: true,
                };
            }
            case LOGIN_IS_FETCHING: {
                return {
                ...state, isFetching: action.isFetching
                }
            }

            default:
                return state;
        }
    }
;

export const setAuthUserData = (usersId, login, email ) => ({type: SET_USER_DATA, data:{usersId, login, email} });
export const loginIsFetching = (isFetching) => ({type: LOGIN_IS_FETCHING, isFetching: isFetching});

export const getAuthUserDataThunk = () => ((dispatch) => {
    dispatch(loginIsFetching(true));
    AuthApi.myAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(loginIsFetching(false));
            let {id,  login, email} = data.data;
            dispatch(setAuthUserData(id, login, email ));
        }
    });
} );


export default authReducer;