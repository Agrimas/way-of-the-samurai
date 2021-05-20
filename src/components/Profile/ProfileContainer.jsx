import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfileInfo, updateStatus} from "../../redux/reducers/profile-reducer";
import {withRouter} from 'react-router-dom';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

function ProfileContainer(props) {
    let [firstRender, setFirstRender] = useState(true);
    let [isFetching, setFetching] = useState(false);

    useEffect(async () => {
        if (firstRender) {
            setFirstRender(false);
        }

        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.userId
            if (!userId) {
                props.history.push('/login');
                return
            }
        }

        setFetching(true);
        await props.getProfile(+userId)
        await props.getStatus(+userId)
        setFetching(false);


    }, [props.match.params.userId])

    return (
        isFetching || firstRender ?
            <Preloader/> :
            <Profile
                isOwner={!props.match.params.userId}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfileInfo={props.saveProfileInfo}
            />
    );
}


function mapStateToProps(state) {
    return {
        userId: state.auth.userId,
        profileAuth: state.auth.profile,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfileInfo,
}), withRouter)(ProfileContainer);