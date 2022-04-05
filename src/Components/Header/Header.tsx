import React from "react";
import classes from "./Header.module.css";

type HeaderType = {
    isAuth: boolean
    login: string | null
    email: string | null
    id: number | null
}

export function Header(props: HeaderType) {

    return (
        <header className={classes.header}>
            <img
                src={'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'}
                alt={'logo'}/>
            <div>{ props.isAuth? props.login : 'Login'}</div>
        </header>
    )
}