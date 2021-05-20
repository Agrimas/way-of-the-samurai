import {ProfileAPI} from "../../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';

let initialState = {
    PostData: [
        {id: 1, likeCount: 5, text: 'lorem1'},
        {id: 2, likeCount: 6, text: 'lorem2'},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 456,
                text: action.text,
                likeCount: 0
            }
            return {
                ...state,
                PostData: [...state.PostData, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                PostData: state.PostData.filter(post => post.id !== action.id),
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}


export const addPost = (text) => ({type: ADD_POST, text})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (id) => async (dispatch) => {
    const data = await ProfileAPI.getProfileInfo(id);
    dispatch(setUserProfile(data));
    return data;
}

export const getStatus = (id) => async (dispatch) => {
    const result = await ProfileAPI.getStatus(id);
    dispatch(setStatusAC(result));
}

export const updateStatus = (status) => async (dispatch) => {
    const result = await ProfileAPI.updateStatus(status);
    if (result.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await ProfileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const saveProfileInfo = (profileInfo) => async (dispatch, getState) => {
    const response = await ProfileAPI.saveProfileInfo(profileInfo);
    if (response.resultCode === 0) {
        dispatch(getProfile(getState().auth.userId));
        return response
    }
}

export default profileReducer;