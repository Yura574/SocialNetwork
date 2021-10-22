import React from "react";
import classes from './Navbar.module.css'

export function NavBar() {
    return (
        <nav className={classes.nav}>
            <div ><a href={'#'} className={`${classes.item} ${classes.active}`}>Profile</a></div>
            <div><a href={'#'}>Message</a></div>
            <div><a href={'#'}>News</a></div>
            <div><a href={'#'}>Music</a></div>
            <div><a href={'#'}>Setting</a></div>
        </nav>
    )
}