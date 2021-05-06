const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_FETCHING = 'SET-FETCHING';

let initialState = {
    value: '',
    PostData: [
        {id: 1, likeCount: 5, text: 'lorem1'},
        {id: 2, likeCount: 6, text: 'lorem2'},
        {id: 3, likeCount: 6, text: 'lorem3'},
    ],
    profile: null,
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 456,
                text: state.value,
                likeCount: 0
            }
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                value: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                value: action.text,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}


export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setFetching = (isFetching) => ({type:SET_FETCHING, isFetching: isFetching})

export default profileReducer;