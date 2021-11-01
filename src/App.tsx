import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./Redux/state";

type AppStore = {
  store: any
}

function App(props: AppStore) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Main store={props.store}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
