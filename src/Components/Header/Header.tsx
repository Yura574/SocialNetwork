import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderType = {
    login: string | null
    isAuth: boolean
    logoutThunkCreator: () => void
}

export function Header(props: HeaderType) {
    return (
        <header className={classes.header}>
            <img
                src={'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'}
                alt={'logo'}/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutThunkCreator}>Logout</button></div>
                   : <NavLink to={'login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}