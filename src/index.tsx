import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/redux-store";

 function render() {

    ReactDOM.render(
        <App messagesPage={store.getState().dialogsPage}
             profilePage={store.getState().profilePage}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')

    );
}

render()
store.subscribe(render)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
