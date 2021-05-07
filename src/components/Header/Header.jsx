import React from "react";
import Classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={Classes.header}>
            <div className={Classes.logoBlock}>
                <img src="https://im0-tub-by.yandex.net/i?id=58b9c9b7af5f19fe14b2fee9cf12b88e&n=13" alt="logo"/>
            </div>
            <div className={Classes.navBlock}>

                {props.isLogin ?
                    <NavLink className={Classes.loginBLock} to={'/profile'}>{props.profileData.fullName}</NavLink>
                    : <NavLink className={Classes.loginBLock} to={'/login'}>Log in</NavLink>}

            </div>
        </header>
    );
}

export default Header;