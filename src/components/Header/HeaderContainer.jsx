import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.auth.isAuth,
        login: state.auth.login,
        profileData: state.auth.profileData,
    };
}

export default connect(mapStateToProps, {auth})(HeaderContainer);