import React from "react";
import classes from "./Main.module.css";
import {Route} from "react-router";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {DataType} from "../../index";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Setting} from "./Setting/Setting";


export function Main(props: DataType) {
    return (
        <div className={classes.main}>
            <Route path={'/profile'} render={() => <Profile postData={props.postData}/>}/>
            <Route path={'/dialogs'}
                   render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/setting'} render={() => <Setting/>}/>
        </div>
    )
}