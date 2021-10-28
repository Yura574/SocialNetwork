import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addMessage, addNewMessage, addPost, newTextPost, StateType, subscribe} from "./Redux/state";
import reportWebVitals from './reportWebVitals';
import { state} from "./Redux/state";

export function render () {
    ReactDOM.render(
        <React.StrictMode>
            <App messagesPage={state.messagesPage}
                 profilePage={state.profilePage}
                 addPost={addPost}
                 addMessage={addMessage}
                 newTextPost={newTextPost}
                 addNewMessage={addNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render()
subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
