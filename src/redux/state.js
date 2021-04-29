const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA';

let Store = {
    _state: {
        profilePage: {
            value: '',
            PostData: [
                {id: 1, likeCount: 5, text: 'lorem1'},
                {id: 2, likeCount: 6, text: 'lorem2'},
                {id: 3, likeCount: 6, text: 'lorem3'},
            ]
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Sveta'
                },
                {
                    id: 2,
                    name: 'Dima'
                },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        let state = this._state;
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 456,
                    text: state.profilePage.value,
                    likeCount: 0
                }
                this._state.profilePage.PostData.push(newPost);
                this._state.profilePage.value = '';
                this._callSubscriber(this);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.value = action.text;
                this._callSubscriber(this);
                break;
            case SEND_MESSAGE:
                let newMessage = {
                    id: 4561,
                    message: state.messagesPage.valueTextarea,
                    isMy: true
                }
                this._state.messagesPage.messagesData.push(newMessage);
                this._state.messagesPage.valueTextarea = '';
                this._callSubscriber(this);
                break;
            case UPDATE_MESSAGE_TEXTAREA:
                this._state.messagesPage.valueTextarea = action.text;
                this._callSubscriber(this);
                break;
        }
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const updateMessageTextareaActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXTAREA, text: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export default Store;