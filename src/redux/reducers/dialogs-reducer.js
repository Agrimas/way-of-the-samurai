import {v1} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
    ],
    messagesData: [
        {id: 1, message: 'Hi', isMy: false},
        {id: 2, message: 'Hi', isMy: true},
        {id: 3, message: 'How are you?', isMy: false},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: v1(),
                message: action.text,
                isMy: true
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return state;
    }
}

export const sendMessage = (text) => ({type: SEND_MESSAGE, text})
export default dialogsReducer;