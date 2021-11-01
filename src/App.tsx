import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (

            <div className="App">
                <Header/>
                <NavBar/>
                <Main/>
            </div>

    );
}

export default App;
