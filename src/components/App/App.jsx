import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginPage from "../Login/Login";

const App = () => {
    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <Sidebar/>
            <main>
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </main>
        </div>
    );
}

export default App;