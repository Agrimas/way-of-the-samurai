import React from "react";
import Classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={Classes.photo} src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d"
                 alt="main-img"/>
            <h1 className={Classes.description}>
                {props.fullName}
            </h1>
            <p>
                {props.aboutMe}
            </p>
        </div>
    );
}

export default ProfileInfo;