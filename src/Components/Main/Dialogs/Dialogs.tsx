import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {DialogsStatePropsType} from "./DialogsContainer";
import {Redirect} from "react-router";


export function Dialogs(props: DialogsStatePropsType) {

    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    function sendMessage() {
        props.sendMessage()
    }

    function onChangeNewMessage(e: ChangeEvent<HTMLInputElement>) {
        let textMessage = e.currentTarget.value
        props.updateNewMessage(textMessage)
    }
if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    {name}

                </div>
                <div className={classes.dialogsMessages}>
                    {message}
                    <input value={props.newMessageText} onChange={onChangeNewMessage}/>
                    <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}