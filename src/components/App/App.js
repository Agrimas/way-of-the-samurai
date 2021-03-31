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

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Sidebar/>
                <main>
                    <Route path='/profile' render={() => <Profile PostData={props.PostData}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;