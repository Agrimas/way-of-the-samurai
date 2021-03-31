import React from "react";
import './App.css';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import Profile from "./../Profile/Profile";
import Dialogs from "./../Dialogs/Dialogs"
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"
import state from "../../redux/state";
import Friend from "../Friends/Friend/Friend";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Sidebar/>
                <main>
                    <Route path='/profile' render={() => <Profile state={props.appState.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.appState.messagesPage}/>}/>
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
        </BrowserRouter>
    );
}

export default App;