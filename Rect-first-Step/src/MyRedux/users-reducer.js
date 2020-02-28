const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTALL_COUNT = "SET_TOTALL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [ ],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 7,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {

        switch (action.type) {
            case FOLLOW: {
                return {
                    ...state,
                    users: state.users.map((us) => {
                        if (us.id === action.userId) {
                            return {...us, followed: true}
                        } else {
                            return us;
                        }
                    })
                };
            }
            case UNFOLLOW: {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u;
                        }
                    })
                };
            }
            case SET_USERS: {
                return {...state, users: [...action.users] }
            }

            case SET_CURRENT_PAGE: {
                return  {...state, currentPage: action.currentPage}
            }

            case SET_TOTALL_COUNT: {
                return  {...state, totalUsersCount: action.count}
            }

            case TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }

            default:
                return state;
        }
    }
;
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTALL_COUNT, count: totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export default usersReducer;