import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || '2';
        this.props.getProfile(userId);
    }

    render() {
        if (typeof this.props.match.params.userId === 'undefined' &&
            this.props.profile?.userId &&
            this.props.profile.userId !== 2) {
            this.props.getProfile(2);
        }
        return !this.props.isFetching ? <Profile profileInfo={this.props.profile}/> : <Preloader/>;
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer)));