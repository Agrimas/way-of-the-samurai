import React from 'react';
import Classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = function (props) {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData.map(message => <Message text={message.message}
                                                                            isMy={message.isMy}/>)
    let sendMessageText = React.createRef();

    function sendMessage(event) {
        console.log(sendMessageText.current.value);
        event.preventDefault();
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
                        <textarea ref={sendMessageText}/>
                        <button type='submit' onClick={sendMessage}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;