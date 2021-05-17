import React from 'react';
import Classes from '../Dialogs.module.css';

const Message = function ({isMy,text}) {
    if (isMy) {
        return (
            <div className={`${Classes.message} ${Classes.isMy}`}><span>{text}</span></div>
        );
    }

    return (
        <div className={Classes.message}><span>{text}</span></div>
    );
}

export default Message;