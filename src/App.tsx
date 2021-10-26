import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {DataType} from "./index";


function App(props: DataType) {
    debugger

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <Main dialogsData={props.dialogsData}
                      messageData={props.messageData}
                      postData={props.postData}
                     />
            </div>
        </BrowserRouter>
    );
}

export default App;
