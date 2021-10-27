import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {MessagesPage, ProfilePage} from "./Redux/state";

type StateType ={
    messagesPage: MessagesPage
    profilePage: ProfilePage
    addPost: (textPost:string)=> void
}

function App(props:StateType ) {
    debugger

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Main messagesPage={props.messagesPage}
                      profilePage={props.profilePage}
                      addPost={props.addPost}
                     />
            </div>
        </BrowserRouter>
    );
}

export default App;
