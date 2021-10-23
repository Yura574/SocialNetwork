import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Dialogs.module.css";


export function Dialogs() {
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    <NavLink to={'/dialogs/1'} className={classes.item}
                             activeClassName={classes.active}>Yura</NavLink>
                    <NavLink to={'/dialogs/2'} className={classes.item}
                             activeClassName={classes.active}>Alenka</NavLink>
                    <NavLink to={'/dialogs/3'} className={classes.item}
                             activeClassName={classes.active}>Valera</NavLink>
                    <NavLink to={'/dialogs/4'} className={classes.item}
                             activeClassName={classes.active}>Marina</NavLink>
                    <NavLink to={'/dialogs/5'} className={classes.item}
                             activeClassName={classes.active}>Dima</NavLink>
                </div>
                <div className={classes.dialogsMessages}>
                    <div className={classes.item}>Hello</div>
                    <div className={classes.item}>What car is you bought?</div>
                    <div className={classes.item}>How is it?</div>
                </div>
            </div>
        </div>
    )
}