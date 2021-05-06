import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setFetching, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import Preloader from "../common/Preloader/Preloader";
import {ProfileAPI} from "../../api/api";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.setFetching(true);
        /**
         * @param {{userId:string}} params
         */
        const userId = this.props.match.params.userId || '2';

        ProfileAPI.getProfileInfo(userId).then(data => {
            this.props.setUserProfile(data);
            this.props.setFetching(false);
        })
    }

    render() {
        if (typeof this.props.match.params.userId === 'undefined' &&
            this.props.profile?.userId &&
            this.props.profile.userId !== 2) {
            this.props.setFetching(true);
            ProfileAPI.getProfileInfo(2).then(data => {
                this.props.setUserProfile(data);
                this.props.setFetching(false);
            })
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

export default connect(mapStateToProps, {setUserProfile, setFetching})(withRouter(ProfileContainer));