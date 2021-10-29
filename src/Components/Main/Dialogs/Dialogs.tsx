import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {ActionType, DialogsElementType, MessageElementType} from "../../../Redux/state";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    dispatch: (action: ActionType) => void
    newMessageText: string
}

export function Dialogs(props: DialogsType) {
    debugger

    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    const newMessage = React.createRef<HTMLInputElement>()

    function sendMessage() {
        props.dispatch({type: "ADD_MESSAGE"})
    }
    function onChangeNewMessage() {
        if(newMessage.current){
        let textMessage = newMessage.current.value
            props.dispatch({type: "ON_CHANGE_NEW_MESSAGE", newMessage: textMessage})
    }}

    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    {name}

                </div>
                <div className={classes.dialogsMessages}>
                    {message}
                    <input ref={newMessage} value={props.newMessageText} onChange={onChangeNewMessage}/>
                    <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}