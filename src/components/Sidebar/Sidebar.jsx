import React from "react";
import { NavLink } from "react-router-dom";
import Classes from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={Classes.aside}>
			<div className={Classes.item}><NavLink to='/profile' activeClassName={Classes.active}>Profile</NavLink></div>
			<div className={Classes.item}><NavLink to='/users' activeClassName={Classes.active}>Users</NavLink></div>
			<div className={Classes.item}><NavLink to='/dialogs' activeClassName={Classes.active}>Messages</NavLink></div>
			<div className={Classes.item}><NavLink to='/news' activeClassName={Classes.active}>News</NavLink></div>
			<div className={Classes.item}><NavLink to='/music' activeClassName={Classes.active}>Music</NavLink></div>
			<div className={Classes.item}><NavLink to='/settings' activeClassName={Classes.active}>Settings</NavLink></div>
		</aside>
	);
}

export default Sidebar;