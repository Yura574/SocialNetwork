import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./Redux/state";


function App(props:StateType ) {
    debugger

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Main state={props.state}
                     />
            </div>
        </BrowserRouter>
    );
}

export default App;
