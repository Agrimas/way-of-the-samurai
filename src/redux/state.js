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
        debugger
        return this._state;
    },

    _callSubscriber: () => {
        console.log('state was changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let state = this._state;
        let newPost = {
            id: 456,
            text: state.profilePage.value,
            likeCount: 0
        }
        this._state.profilePage.PostData.push(newPost);
        this._state.profilePage.value = '';
        this._callSubscriber(this);
    },

    updateNewPostText(text) {
        this._state.profilePage.value = text;
        this._callSubscriber(this);
    },

    sendMessage() {
        console.log(this)
        let state = this._state;
        let newMessage = {
            id: 4561,
            text: state.messagesPage.valueTextarea,
            isMy: true
        }
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.valueTextarea = '';
        this._callSubscriber(this);
    },

    updateMessageTextarea(text) {
        this._state.messagesPage.valueTextarea = text;
        this._callSubscriber(this);
    }
}

export default Store;