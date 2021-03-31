import React from 'react';
import {NavLink} from "react-router-dom";
import Classes from '../Dialogs.module.css';

const DialogItem = function (props) {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={Classes.dialog}>
            <NavLink className={Classes.link} to={path} activeClassName={Classes.dialog_active}>
                <img
                    src="https://i.pinimg.com/736x/66/01/28/660128384113e56d2921764f9860c66e--stuttgart-medieval-castle.jpg"
                    className={Classes.avatar} alt=""/>
                <div>{props.name}</div>
            </NavLink>
        </div>
    );
}

export default DialogItem;