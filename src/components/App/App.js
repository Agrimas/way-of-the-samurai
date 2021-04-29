import React from "react";
import './App.css';
import {Route} from "react-router";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import Profile from "./../Profile/Profile";
import Dialogs from "./../Dialogs/Dialogs"
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"
import Friend from "../Friends/Friend/Friend";

const App = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Sidebar/>
            <main>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.appState.profilePage} dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.appState.messagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>

                <Route path={`/friends/${props.appState.sidebar.friends[0].name}`}
                       render={() => <Friend state={props.appState.sidebar.friends[0]}/>}/>
                <Route
                    path={`/friends/${props.appState.sidebar.friends[1].name}`}
                    render={() => <Friend state={props.appState.sidebar.friends[1]}/>}/>

            </main>
        </div>
    );
}

export default App;