import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store} from "./Redux/state";



export function render () {
    ReactDOM.render(
        <React.StrictMode>
            <App messagesPage={store.getState().messagesPage}
                 profilePage={store.getState().profilePage}
                 dispatch = {store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render()
store.subscribe(render)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
