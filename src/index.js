import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {sendMessage} from "./redux/state";
import {UpdateMessageTextarea} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage}
                 UpdateMessageTextarea={UpdateMessageTextarea}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
