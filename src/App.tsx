import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
