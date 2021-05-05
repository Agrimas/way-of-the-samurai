import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Sidebar/>
            <main>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
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