import React from 'react';
import Classes from './User.module.css';
import userPhoto from '../../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";

function User(props) {

    function follow() {
        props.follow(props.id);
    }

    function unfollow() {
        props.unfollow(props.id);
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.avatarBlock}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small ? props.photos.small : userPhoto} alt=""/>
                </NavLink>
                <button onClick={props.followed ? unfollow : follow}
                        className={Classes.follow}>{props.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={Classes.info}>
                <div className={Classes.nameAndStatus}>
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {props.status}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;