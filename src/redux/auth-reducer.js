const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';

const initialState = {
    userId: null,
    email: null,
    login: null,
    profile: null,
    isFetching: true,
    isAuth: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                profileData: action.profileData,
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default:
            return state;
    }
}

export const setUserData = (userData, profileData) => ({type: SET_USER_DATA, userData: userData, profileData: profileData})
export const setAuth = (isAuth) => ({type: SET_AUTH, isAuth: isAuth})

export default authReducer;