import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let Store = {
    _state: {},
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
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this);
}
}


export default Store;