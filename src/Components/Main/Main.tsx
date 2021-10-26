import React from "react";
import classes from "./Main.module.css";
import {Route} from "react-router";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Setting} from "./Setting/Setting";
import {StateType} from "../../Redux/state";


export function Main(props: StateType) {
    return (
        <div className={classes.main}>
            <Route path={'/profile'} render={() => <Profile postData={props.state.profilePage.postData}/>}/>
            <Route path={'/dialogs'}
                   render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                          messageData={props.state.messagesPage.messageData}/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/setting'} render={() => <Setting/>}/>
        </div>
    )
}