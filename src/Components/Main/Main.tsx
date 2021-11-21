import React from "react";
import classes from "./Main.module.css";
import {Route} from "react-router";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Setting} from "./Setting/Setting";
import DialogsContainer from "./Dialogs/DialogsContainer";
import {UsersContainer} from "./UsersPage/UsersContainer";
import {ProfileContainer} from "./Profile/ProfileContainer";
import {Login} from "./Login/Login";

export function Main() {
    return (
        <div className={classes.main}>
            <Route path={'/profile/:userId'} render={() =>
                <ProfileContainer />}/>
            <Route path={'/dialogs'} render={() =>
                <DialogsContainer/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/setting'} render={() => <Setting />}/>
            <Route path={'/users'} render={() => <UsersContainer />}/>
            <Route path={'/login'} render={() => <Login />}/>
        </div>
    )
}