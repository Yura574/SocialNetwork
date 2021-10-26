import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {DataType, DialogsDataType} from "../../../index";


export function Dialogs(props: DialogsDataType) {
debugger

    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    {name}

                </div>
                <div className={classes.dialogsMessages}>
                    {message}
                </div>
            </div>
        </div>
    )
}