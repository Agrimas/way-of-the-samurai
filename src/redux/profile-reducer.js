const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    value: '',
    PostData: [
        {id: 1, likeCount: 5, text: 'lorem1'},
        {id: 2, likeCount: 6, text: 'lorem2'},
        {id: 3, likeCount: 6, text: 'lorem3'},
    ]
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
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer;