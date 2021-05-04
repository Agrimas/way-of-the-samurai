import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import Profile from "./../Profile/Profile";
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Sidebar/>
            <main>
                <Route path='/profile' render={() => <Profile/>}/>
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