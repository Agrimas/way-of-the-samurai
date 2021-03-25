import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Classes from './Profile.module.css'

const Profile = () => {
	return (
		<div>
			<img className={Classes.profile_photo} src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d" alt="main-img" />
			<h1>
				Title
			</h1>
			<MyPosts />
		</div>
	);
}

export default Profile;