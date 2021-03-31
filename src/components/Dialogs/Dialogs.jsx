import React from 'react';
import Classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = function (props) {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData.map(message => <Message text={message.message} isMy={message.isMy}/>)

    return (
        <div div className={Classes.dialogs}>
            <div className={Classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={Classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;