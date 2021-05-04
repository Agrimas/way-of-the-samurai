import React from 'react';
import Classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = function (props) {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                      id={dialog.id}/>);

    let messagesElements = props.messagesData.map(message => <Message key={message.id} text={message.message}
                                                                      isMy={message.isMy}/>)

    function onChangeHandler(e) {
        props.updateMessageTextarea(e.currentTarget.value);
    }

    function sendMessage() {
        props.sendMessage()
    }

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={Classes.messagesContainer}>
                <div className={Classes.messagesBody}>
                    {messagesElements}
                </div>
                <div className={Classes.formContainer}>
                    <form>
                        <textarea value={props.valueTextarea} onChange={onChangeHandler}/>
                        <button type='button' onClick={sendMessage}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;