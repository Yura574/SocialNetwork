import React from 'react';
import './App.css';
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <NavBar/>
            <Main/>
        </div>

    );
}

export default App;
