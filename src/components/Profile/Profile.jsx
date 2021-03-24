import React from "react";
import Classes from './Profile.module.css'

const Profile = () => {
	return (
		<main className={Classes.main}>
			<div className="profile-main-photo">
				<img src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d" alt="main-img" />
			</div>
			<div>
				ava + description
			</div>
			<div className='posts'>
				My posts
				<div className={Classes.item}>
					New post
				</div>
				<div className={Classes.item}>
					Post 1
				</div>
				<div className={Classes.item}>
					Post 2
				</div>
			</div>
		</main>
	);
}

export default Profile;