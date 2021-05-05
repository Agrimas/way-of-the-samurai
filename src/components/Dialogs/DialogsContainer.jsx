import React from 'react';
import {sendMessage, updateMessageTextarea} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        valueTextarea: state.messagesPage.valueTextarea
    }
}

const DialogsContainer = connect(mapStateToProps, {updateMessageTextarea, sendMessage})(Dialogs);

export default DialogsContainer;