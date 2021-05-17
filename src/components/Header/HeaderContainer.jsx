import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/reducers/auth-reducer";

function HeaderContainer(props) {
    return (
        <Header {...props}/>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.profile,
    };
}

export default connect(mapStateToProps, {logOut})(HeaderContainer);