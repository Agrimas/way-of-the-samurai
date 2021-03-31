import React from "react";
import Classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts PostData={props.state.PostData}/>
		</div>
	);
}

export default Profile;