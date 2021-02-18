import {createSelector} from "reselect";

export const selectIsAuth = (state) => {
    return state.auth.isAuth
}
export const selectUserLogin = (state) => {
    return state.auth.login
}