import React from 'react';
import {sendMessageActionCreator, updateMessageTextareaActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        valueTextarea: state.messagesPage.valueTextarea
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateMessageTextarea: (text) => dispatch(updateMessageTextareaActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;