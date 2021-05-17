import {UsersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/objects-helper";

const SET_USERS = 'users/SET-USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, 'id', action.id, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, 'id', action.id, {followed: false})
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

export const acceptFollow = (id) => ({type: FOLLOW, id});
export const acceptUnFollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(page));
    const data = await UsersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    const result = await apiMethod(id);
    if (result === 0) {
        dispatch(actionCreator(id));
    }
    return result
}

export const follow = (id) => (dispatch) => {
    return followUnfollowFlow(dispatch, id, UsersAPI.follow, acceptFollow);
}

export const unFollow = (id) => (dispatch) => {
    return followUnfollowFlow(dispatch, id, UsersAPI.unFollow, acceptUnFollow);
}

export default usersReducer;