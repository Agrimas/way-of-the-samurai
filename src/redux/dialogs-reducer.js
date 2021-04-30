const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA';

let initialState = {
    valueTextarea: '',
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
                id: 4561,
                message: state.valueTextarea,
                isMy: true
            }
            state.messagesData.push(newMessage);
            state.valueTextarea = '';
            break;
        case UPDATE_MESSAGE_TEXTAREA:
            state.valueTextarea = action.text;
            break;
    }
    return state;
}

export const updateMessageTextareaActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXTAREA, text: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export default dialogsReducer;