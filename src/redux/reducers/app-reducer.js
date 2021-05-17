import {auth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccessed = () => ({
    type: INITIALIZED_SUCCESS,
})

export const initializeApp = () => async (dispatch) => {
    await dispatch(auth());

    dispatch(initializedSuccessed());
}

export default appReducer;