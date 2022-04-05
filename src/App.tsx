import React from 'react';
import './App.css';
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {HeaderContainer} from "./Components/Header/HeaderContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
