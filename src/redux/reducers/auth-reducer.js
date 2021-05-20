import {AuthAPI, ProfileAPI, SecurityAPI} from "../../api/api";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_USER_PROFILE_DATA = 'auth/SET-USER-PROFILE-DATA';
const SET_AUTH = 'auth/SET-AUTH';
const SET_ERROR = 'auth/SET-ERROR';
const SET_CAPTCHA = 'auth/SET-CAPTCHA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    profile: null,
    isFetching: true,
    isAuth: false,
    captcha: null,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    userId,
    email,
    login,
})
export const setUserProfileData = (profile) => ({
    type: SET_USER_PROFILE_DATA,
    profile,
})
export const setAuth = (isAuth) => ({
    type: SET_AUTH,
    isAuth,
})
export const setError = (error) => ({
    type: SET_ERROR,
    error,
})
export const setCaptcha = (url) => ({
    type: SET_CAPTCHA,
    captcha: url
})

export const auth = () => async (dispatch) => {
    const data = await AuthAPI.auth();
    if (data.resultCode === 0) {
        const userData = data.data;
        await Promise.all([
            dispatch(setUserData(userData.id, userData.email, userData.login)),
            dispatch(setAuth(true)),
        ])
        const profileData = await ProfileAPI.getProfileInfo(userData.id);
        await dispatch(setUserProfileData(profileData))
    }
}

export const login = ({email, password, remember, captcha}) => async (dispatch) => {
    const data = await AuthAPI.login(email, password, remember, captcha)
    if (data.resultCode === 0) {
        dispatch(auth());
        dispatch(setError(''));
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
        dispatch(setError(data.messages.join()));
    }
    return data;
}

export const getCaptchaURL = () => async (dispatch) => {
    const captchaURL = await SecurityAPI.getCaptcha();
    dispatch(setCaptcha(captchaURL));
}

export const logOut = () => async (dispatch) => {
    await AuthAPI.logOut();
    await dispatch(setAuth(false));
    dispatch(setUserData(null, null, null, null));
}

export default authReducer;