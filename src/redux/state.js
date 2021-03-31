let state = {
    profilePage: {
        PostData: [
            {last: true, likeCount: 5},
            {last: false, likeCount: 6},
            {last: false, likeCount: 6},
            {last: false, likeCount: 8},
            {last: false, likeCount: 9},
            {last: false, likeCount: 16},
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

export default state;