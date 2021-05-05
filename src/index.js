import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
