let state = {
    profilePage: {
        PostData: [
            {id: 1, likeCount: 5, text: 'lorem1'},
            {id: 2, likeCount: 6, text: 'lorem2'},
            {id: 3, likeCount: 6, text: 'lorem3'},
        ]
    },
    messagesPage: {
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

export function addPost(text) {
    let newPost = {
        id: 456,
        text: text,
        likeCount: 0
    }
    state.profilePage.PostData.push(newPost);
}

export default state;