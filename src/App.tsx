import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {NavBar} from "./Components/Navbar";
import {Main} from "./Components/Main";

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
