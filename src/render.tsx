import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, state} from "./Redux/state";


ReactDOM.render(
    <React.StrictMode>
        <App messagesPage={state.messagesPage}
             profilePage={state.profilePage}
             addPost={addPost}
             addMessage={addMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
