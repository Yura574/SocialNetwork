import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";


export function Dialogs() {

    const dialogsData = [
        {id: 1, name: 'Yura'},
        {id: 2, name: 'Alenka'}
    ]

    const messageData= [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What car is you bought?'}
    ]

    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>

                </div>
                <div className={classes.dialogsMessages}>
                    <MessageItem message={messageData[0].message} id={messageData[0].id}/>
                    <MessageItem message={messageData[1].message} id={messageData[1].id}/>
                </div>
            </div>
        </div>
    )
}