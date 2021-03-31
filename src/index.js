import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
];

let PostData = [
    {last: true, likeCount: 5},
    {last: false, likeCount: 6},
    {last: false, likeCount: 6},
    {last: false, likeCount: 8},
    {last: false, likeCount: 9},
    {last: false, likeCount: 16},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messagesData={messagesData} PostData={PostData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
