import React from "react";
import './App.css';
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import Profile from "./../Profile/Profile";

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;