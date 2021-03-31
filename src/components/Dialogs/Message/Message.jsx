import React from 'react';
import Classes from '../Dialogs.module.css';

const Message = function (props) {
    if (props.isMy) {
        return (
            <div className={`${Classes.message} ${Classes.isMy}`}><span>{props.text}</span></div>
        );
    }

    return (
        <div className={Classes.message}><span>{props.text}</span></div>
    );
}

export default Message;