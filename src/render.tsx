import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addMessage, addPost,  StateType} from "./Redux/state";

export function render (state: StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App messagesPage={state.messagesPage}
                 profilePage={state.profilePage}
                 addPost={addPost}
                 addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}