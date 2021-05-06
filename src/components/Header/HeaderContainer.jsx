import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth, setUserData} from "../../redux/auth-reducer";
import {AuthAPI, ProfileAPI} from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount() {
        AuthAPI.auth().then(data => {
            let userData = data.data;
            switch (data.resultCode) {
                case 0:
                    ProfileAPI.getProfileInfo(userData.id).then(data => {
                        this.props.setUserData(userData, data);
                        this.props.setAuth(true);
                    })
                    break;
                case 1:
                    this.props.setAuth(false)
                    break;
            }
        })
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

export default connect(mapStateToProps, {setUserData, setAuth})(HeaderContainer);