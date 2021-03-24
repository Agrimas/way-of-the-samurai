import React from "react";
import Classes from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={Classes.aside}>
			<div className={`${Classes.item} ${Classes.active}`}>Profile</div>
			<div className={Classes.item}>Messages</div>
			<div className={Classes.item}>Music</div>
			<div className={Classes.item}>Settings</div>
		</aside>
	);
}

export default Sidebar;