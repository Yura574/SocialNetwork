import React, {ComponentType} from 'react';
import './App.css';
import {NavBar} from "./Components/Navbar/Navbar";
import {Main} from "./Components/Main/Main";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {StateType} from "./Redux/Redux-store";
import {initializeApp} from "./Redux/app_reducer";
import {Preloader} from "./common/preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router";

type AppType = {
    initializeApp: () => void
    initialized: boolean
}

export class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <Main/>
            </div>

        );
    }
}


let mapStateToProps = (state: StateType)=> ({
    initialized: state.app.initialized
})

let mapDispatchToProps= {
    initializeApp
}


export const AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)


