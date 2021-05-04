const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

function usersReducer(state = initialState, action) {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                usersData: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state;
    }

}

export const followAC = (id) => ({type: FOLLOW, id: id});
export const unFollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageAC = (currentPageNumber) => ({type: SET_CURRENT_PAGE, currentPage: currentPageNumber});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});

export default usersReducer;