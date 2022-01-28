import React from "react";
import classes from "./Main.module.css";
import {Route} from "react-router";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Setting} from "./Setting/Setting";
import {StoreType} from "../../Redux/redux-store";
import {DialogsContainer} from "./Dialogs/DialogsContainer";

type MainType = {
   store: StoreType
}

export function Main(props: MainType) {

    return (
        <div className={classes.main}>
            <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
            <Route path={'/dialogs'}
                   render={() => <DialogsContainer store = {props.store}/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/setting'} render={() => <Setting/>}/>
        </div>
    )
}