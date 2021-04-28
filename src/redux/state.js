let state = {
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
}

let rerenderEntireTree = () => {
    console.log('state was changed');
}

export function addPost() {
    let newPost = {
        id: 456,
        text: state.profilePage.value,
        likeCount: 0
    }
    state.profilePage.PostData.push(newPost);
    state.profilePage.value = '';
    rerenderEntireTree(state);
}

export function updateNewPostText(text) {
    state.profilePage.value = text;
    rerenderEntireTree(state);
}

export function sendMessage() {
    let newMessage = {
        id: 4561,
        message: state.messagesPage.valueTextarea,
        isMy: true
    }
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.valueTextarea = '';
    rerenderEntireTree(state);
}

export function UpdateMessageTextarea(text) {
    state.messagesPage.valueTextarea = text;
    rerenderEntireTree(state);
}

export const subscribe = (observer)=>{
    rerenderEntireTree = observer;
}

export default state;