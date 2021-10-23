import React from "react";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import classes from "./Main.module.css";


export function Main() {
    return (
        <div className={classes.main}>
            <Profile/>
            {/*<Dialogs/>*/}
        </div>
    )
}