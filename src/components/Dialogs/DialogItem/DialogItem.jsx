import React from 'react';
import { NavLink } from "react-router-dom";
import Classes from '../Dialogs.module.css';

const DialogItem = function (props) {
	const path = `/dialogs/${props.id}`;
	return (
		<div className={Classes.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div >
	);
}

export default DialogItem;