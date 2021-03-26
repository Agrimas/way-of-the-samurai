import React from 'react';
import { NavLink } from "react-router-dom";
import Classes from './Dialogs.module.css';

const Dialogs = function () {

	let dialogsData = [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Dima' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
	];

	let messagesData = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hi' },
		{ id: 3, message: 'How are you?' },
	];

	return (
		<div className={Classes.dialogs}>
			<div className={Classes.dialogs_items}>
				<Dialog name='Anton' id={1} />
				<Dialog name='Dima' id={2} />
				<Dialog name='Sveta' id={3} />
				<Dialog name='Sasha' id={4} />
			</div>
			<div className={Classes.messages}>
				<Message text='Hi' />
				<Message text='Hi' />
				<Message text='How are you?' />
			</div>
		</div>
	);
}

const Dialog = function (props) {
	const path = `/dialogs/${props.id}`;
	return (
		<div className={Classes.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div >
	);
}

const Message = function (props) {
	return (
		<div className={Classes.message}>{props.text}</div>
	);
}

export default Dialogs;