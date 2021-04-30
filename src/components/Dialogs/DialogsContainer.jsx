import React from 'react';
import {sendMessageActionCreator, updateMessageTextareaActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

const DialogsContainer = function (props) {

    return <StoreContext.Consumer>{(store) => {

        let dialogsData = store.getState().messagesPage.dialogsData;

        let messagesData = store.getState().messagesPage.messagesData;

        let valueTextarea = store.getState().messagesPage.valueTextarea;

        function updateMessageTextarea(text) {
            const action = updateMessageTextareaActionCreator(text);
            store.dispatch(action);
        }

        function sendMessage() {
            const action = sendMessageActionCreator();
            store.dispatch(action)
        }

        return (<Dialogs dialogsData={dialogsData} messagesData={messagesData}
                         updateMessageTextarea={updateMessageTextarea}
                         sendMessage={sendMessage} valueTextarea={valueTextarea}/>)
    }}
    </StoreContext.Consumer>
}

export default DialogsContainer;