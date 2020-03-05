import {ProfileAPI, UserAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
    postData: [
        {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
        {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
        {id: 2, messenger: "I'm totally agree with you!", likesCount: " 8"},
        {id: 3, messenger: "Be marvelous!", likesCount: " 12"},
        {id: 4, messenger: "Handsome buddy!", likesCount: " 121"},
        {id: 5, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
    ],
    newPostText: "I'm the great!",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                messenger: state.newPostText,
                likesCount: " 1111111111",
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: "",
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

        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// Thunk component
export const getUserProfile = (userId) => {
    return ((dispatch) => {
            UserAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
        }
    )
};

export const getStatusUsers = (userId) => {
    return ((dispatch) => {
            ProfileAPI.getStatus(userId).then(response => {
                dispatch(setStatus(response.data));
            });
        }
    )
};

export const updateStatus = (status) => {
    return ((dispatch) => {
            ProfileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
        }
    )
};

export default profileReducer;