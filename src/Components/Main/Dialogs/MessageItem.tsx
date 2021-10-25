import React from "react";
import classes from "./Dialogs.module.css";

type MessageItemType = {
    message: string
    id: number
}

export function MessageItem (props: MessageItemType){
    return (
        <div>
            <div className={classes.item}>{props.message}</div>
        </div>
    )
}