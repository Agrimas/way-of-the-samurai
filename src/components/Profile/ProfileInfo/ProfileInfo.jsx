import React from "react";
import Classes from './ProfileInfo.module.css'
import Status from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={Classes.photo} src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d"
                 alt="main-img"/>
            <h1 className={Classes.description}>
                {props.profile?.fullName}
            </h1>
            <Status status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;