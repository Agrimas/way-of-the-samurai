import React from "react";
import Classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<img className={Classes.photo} src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d" alt="main-img" />
			<h1 className={Classes.desciption}>
				Title
			</h1>
		</div>
	);
}

export default ProfileInfo;