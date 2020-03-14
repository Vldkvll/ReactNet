import {AuthApi, UserAPI} from "../API/api";
import {updateObjectInArray} from "../Utils/user-reducer-object-state-helper";

const FOLLOW = "4-buddy.net/Users/FOLLOW";
const UNFOLLOW = "4-buddy.net/Users/UNFOLLOW";
const SET_USERS = "4-buddy.net/Users/SET_USERS";
const SET_CURRENT_PAGE = "4-buddy.net/Users/SET_CURRENT_PAGE";
const SET_TOTALL_COUNT = "4-buddy.net/Users/SET_TOTALL_COUNT";
const TOGGLE_IS_FETCHING = "4-buddy.net/Users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "4-buddy.net/Users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

        switch (action.type) {
            case FOLLOW: {
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id",{followed: true})

                    // BEFORE REFACTORING

                    // users: state.users.map((us) => {
                    //     if (us.id === action.userId) {
                    //         return {...us, followed: true}
                    //     } else {
                    //         return us;
                    //     }
                    // })
                };
            }
            case UNFOLLOW: {
                return {
                    ...state,
                    users: state.users.map(us => {
                        if (us.id === action.userId) {
                            return {...us, followed: false}
                        } else {
                            return us;
                        }
                    })
                };
            }
            case SET_USERS: {
                return {...state, users: [...action.users]}
            }

            case SET_CURRENT_PAGE: {
                return {...state, currentPage: action.currentPage}
            }

            case SET_TOTALL_COUNT: {
                return {...state, totalUsersCount: action.count}
            }

            case TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }

            case TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            }

            default:
                return state;
        }
    }
;
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTALL_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUserThunkCreator = (currentPage, pageSize) => {
    return ( async (dispatch) => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(true));
            const responseData = await  UserAPI.getUsersFromServer(currentPage, pageSize)
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(responseData.items));
                dispatch(setTotalCount(responseData.totalCount));
        }
    ) 
};

const followUnfollowFlow = async  (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true,  userId));
    const responseData = await apiMethod(userId);
    if (responseData.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false,  userId));
    dispatch(actionCreator(userId))};


export const unfollow = (userId) => {
    return ( (dispatch) => {
        let apiMethod = UserAPI.setUnFollow.bind(UserAPI);
        let actionCreator = unfollowSuccess;
            followUnfollowFlow(dispatch, userId, apiMethod, actionCreator) }
    )
};

export const follow = (userId) => {
    return (  (dispatch) => {
            let apiMethod = UserAPI.setFollow.bind(UserAPI);
            let actionCreator = followSuccess;
            followUnfollowFlow(dispatch, userId, apiMethod, actionCreator) }
    )
};

export default usersReducer;