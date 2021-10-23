import React from "react";
import classes from "./Main.module.css";
import {Route} from "react-router";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Setting} from "./Setting/Setting";


export function Main() {
    return (
        <div className={classes.main}>
         <Route path={'/profile'} component={Profile}/>
         <Route path={'/dialogs'} component={Dialogs}/>
         <Route path={'/news'} component={News}/>
         <Route path={'/music'} component={Music}/>
         <Route path={'/setting'} component={Setting}/>
        </div>
    )
}