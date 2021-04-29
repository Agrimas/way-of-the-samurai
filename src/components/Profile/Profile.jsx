import React from "react";
import Classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts valueTextarea={props.profilePage.value} PostData={props.profilePage.PostData}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;