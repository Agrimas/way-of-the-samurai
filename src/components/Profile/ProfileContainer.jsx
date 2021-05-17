import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import {withRouter} from 'react-router-dom';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withFetching} from "../../utils/withFetching";
import {withSuspense} from "../../hoc/withSuspense";

function ProfileContainer(props) {
    let [firstRender, setFirstRender] = useState(true);
    let [isFetching, setFetching] = useState(false);

    useEffect(async () => {
            if (firstRender) {
                setFirstRender(false);
            }
            let userId = props.match.params.userId;
            if (!userId) {
                userId = props.authId;
                if (!userId) {
                    props.history.push('/login');
                    return;
                }
            }

            async function getInfo(id) {
                await Promise.all([props.getProfile(id), props.getStatus(id)])
            }

            withFetching(getInfo, setFetching, [+userId])
        },
        [props.match.params.userId])

    return (
        isFetching || firstRender ?
            <Preloader/> :
            <Profile
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
    );
}


function mapStateToProps(state) {
    return {
        authId: state.auth.userId,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus
}), withRouter)(ProfileContainer);