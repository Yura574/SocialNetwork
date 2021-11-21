import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogsElementType, MessageElementType} from "../../../Redux/dialogs_reducer";
import {Redirect} from "react-router";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
    sendMessage: () => void
    onChangeMessageText: (messageText: string) => void
    isAuth: boolean
}


export function Dialogs(props: DialogsType) {

    const name = props.dialogsData.map(d =>  <div>{d.name}</div>)
    const message = props.messageData.map(m => <div> {m.message}</div>)

    const sendMessage = () => {
        props.sendMessage()
    }
    const onChangeMessageText = (e: ChangeEvent<HTMLInputElement>) => {
        const messageText = e.target.value
        props.onChangeMessageText(messageText)
    }
    if(!props.isAuth){return <Redirect to={'/login'}/>}
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    <div>{name}</div>
                </div>
                <div className={classes.dialogsMessages}>
                    {message}
                    <input value={props.newMessage} onChange={onChangeMessageText}/>
                    <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}