import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogsItemType = {
    id: number
    name: any
}

export function DialogsItem(props: DialogsItemType) {
    const path = '/dialogs/' + props.id
    return(
        <div>
            <NavLink to={path} className={classes.item}
                     activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}