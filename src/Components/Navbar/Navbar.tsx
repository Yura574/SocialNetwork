import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

export function NavBar() {
    return (
        <nav className={classes.nav} >
            <div ><NavLink to={'/profile'} className={classes.item} activeClassName={classes.active}>Profile</NavLink></div>
            <div><NavLink to={'/dialogs'} className={classes.item} activeClassName={classes.active}>Message</NavLink></div>
            <div><NavLink to={'/news'} className={classes.item} activeClassName={classes.active}>News</NavLink></div>
            <div><NavLink to={'/music'} className={classes.item} activeClassName={classes.active}>Music</NavLink></div>
            <div><NavLink to={'/setting'} className={classes.item} activeClassName={classes.active}>Setting</NavLink></div>
        </nav>
    )
}