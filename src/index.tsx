import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/Redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AppContainer} from "./App";


export function render() {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer  />
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

render()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
