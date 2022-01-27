import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {ActionType, MessagesPage, ProfilePage} from "./Redux/state";

type StateType = {
    messagesPage: MessagesPage
    profilePage: ProfilePage
    addPost: () => void
    addMessage: () => void
    newTextPost: (newText: string) => void
    addNewMessage: (newMessage:string) => void
    dispatch: (action: ActionType) => void
}

function App(props: StateType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Main messagesPage={props.messagesPage}
                      profilePage={props.profilePage}
                      dispatch = {props.dispatch}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
