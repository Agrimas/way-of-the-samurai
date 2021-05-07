import React from 'react';
import {sendMessage, updateMessageTextarea} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

function mapStateToProps(state) {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        valueTextarea: state.messagesPage.valueTextarea
    }
}

const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, {updateMessageTextarea, sendMessage})(Dialogs));

export default DialogsContainer;