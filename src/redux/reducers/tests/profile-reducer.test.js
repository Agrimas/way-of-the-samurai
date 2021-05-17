import profileReducer, {addPost, deletePost} from "../profile-reducer";

let state = {
    PostData: [
        {id: 1, likeCount: 5, text: 'lorem1'},
        {id: 2, likeCount: 6, text: 'lorem2'},
    ],
};


it('new post should be added', () => {
    let action = addPost('lola');

    let newState = profileReducer(state, action);

    expect(newState.PostData).toHaveLength(3);
})

it('message of new post should be correct', () => {
    let action = addPost('lola');

    let newState = profileReducer(state, action);

    expect(newState.PostData[2].text).toBe('lola');
})

it('likeCount of new post should be 0', () => {
    let action = addPost('lola');

    let newState = profileReducer(state, action);

    expect(newState.PostData[2].likeCount).toBe(0);
})

it('after deleting length of postData should be decriment', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.PostData).toHaveLength(1);
})

it('after deleting length of postData shouldn\'t be decriment, if id is incorrect', () => {
    let action = deletePost('das');

    let newState = profileReducer(state, action);

    expect(newState.PostData).toHaveLength(2);
})