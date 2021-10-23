import React from "react";
import classes from './Navbar.module.css'

export function NavBar() {
    return (
        <nav className={classes.nav}>
            <div ><a href={'/profile'} className={`${classes.item} ${classes.active}`}>Profile</a></div>
            <div><a href={'/dialogs'}>Message</a></div>
            <div><a href={'/news'}>News</a></div>
            <div><a href={'/music'}>Music</a></div>
            <div><a href={'/setting'}>Setting</a></div>
        </nav>
    )
}