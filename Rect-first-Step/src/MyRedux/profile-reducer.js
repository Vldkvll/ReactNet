import {ProfileAPI, UserAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "4-BUDDY.NET/PROFILE/ADD-POST";
const DELETE_POST = "4-BUDDY.NET/PROFILE/DELETE-POST";
const UPDATE_NEW_POST_TEXT = "4-BUDDY.NET/PROFILE/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "4-BUDDY.NET/PROFILE/SET-USER-PROFILE";
const SET_STATUS = "4-BUDDY.NET/PROFILE/SET-STATUS";
const SET_PHOTO = "4-BUDDY.NET/PROFILE/SET-PHOTO";

let initialState = {
    postData: [
        {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
        {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
        {id: 2, messenger: "I'm totally agree with you!", likesCount: " 8"},
        {id: 3, messenger: "Be marvelous!", likesCount: " 12"},
        {id: 4, messenger: "Handsome buddy!", likesCount: " 121"},
        {id: 5, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                messenger: action.newPostText,
                likesCount: " 1111111111",
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: "",
            };
        }

        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(el => el.id !== action.id),
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }

        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setPhotosSuccess = (photos) => ({type: SET_PHOTO, photos});


// Thunk component
export const getUserProfile = (userId) => {
    return (async (dispatch) => {
        const responseData = await UserAPI.getProfile(userId)
        dispatch(setUserProfile(responseData));
    });
};

export const getStatusUsers = (userId) => {
    return (async (dispatch) => {
        const response = await ProfileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => {
    return (async (dispatch) => {
        const response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await ProfileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(setPhotosSuccess(response.data.data.photos));
        }
    }
};

// export const saveProfile = (profile) => {
//     return async (dispatch, getState ) => {
//         const userId = getState().auth.userId
//         const response = await ProfileAPI.saveProfileOnServer(profile);
//         if (response.data.resultCode === 0) {
//             dispatch(getStatusUsers(userId));
//         }
//     }
// };
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.usersId;
    const response = await ProfileAPI.saveProfileOnServer(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;