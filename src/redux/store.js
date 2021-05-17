import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

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