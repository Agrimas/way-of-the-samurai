import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Classes from './Profile.module.css'

const Profile = () => {
	return (
		<main className={Classes.main}>
			<div className={Classes.main_photo}>
				<img src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d" alt="main-img" />
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</main>
	);
}

export default Profile;