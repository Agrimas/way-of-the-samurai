import React from 'react';
import {sendMessage} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

function mapStateToProps(state) {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
}

export default compose(connect(mapStateToProps, {sendMessage}), WithAuthRedirect)(Dialogs);