import React, {useState} from 'react';
import Classes from './User.module.css';
import userPhoto from '../../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";
import {withFetching} from "../../../utils/withFetching";

function User({id, name, status, photos, followed, follow, unFollow}) {

    const [isFetching, setFetching] = useState(false);

    const buttonFollowHandler = () => {
        followed ? withFetching(unFollow, setFetching, [id]) : withFetching(follow, setFetching, [id])
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.avatarBlock}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photos.small ? photos.small : userPhoto} alt=""/>
                </NavLink>
                <button disabled={isFetching}
                        onClick={buttonFollowHandler}
                        className={Classes.follow}>{followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={Classes.info}>
                <div className={Classes.nameAndStatus}>
                    <div>
                        {name}
                    </div>
                    <div>
                        {status}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;