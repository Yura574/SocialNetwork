import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./Redux/redux-store";

type StateType = {
    // messagesPage: MessagesPage
    // profilePage: ProfilePage
    // dispatch: (action: ActionType) => void
    store: StoreType
}

function App(props: StateType) {

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
