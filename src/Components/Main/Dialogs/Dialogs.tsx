import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";


export function Dialogs() {
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    <DialogsItem name={'Yura'} id={1}/>
                    <DialogsItem name={'Alenka'} id={2}/>
                    <DialogsItem name={'Maksim'} id={3}/>
                    <DialogsItem name={'Marina'} id={4}/>
                    <DialogsItem name={'Dima'} id={5}/>
                </div>
                <div className={classes.dialogsMessages}>
                    <MessageItem message={'Hello'}/>
                    <MessageItem message={'What car is you bought?'}/>
                    <MessageItem message={'How is it?'}/>
                </div>
            </div>
        </div>
    )
}