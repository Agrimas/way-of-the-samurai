import React from 'react';
import Classes from '../Dialogs.module.css';

const Message = function (props) {
    return (
        <div className={Classes.message}>{props.text}</div>
    );
}

export default Message;