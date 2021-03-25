import React from "react";
import './App.css';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import Profile from "./../Profile/Profile";
import Dialogs from "./../Dialogs/Dialogs"
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Sidebar />
        <main>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;