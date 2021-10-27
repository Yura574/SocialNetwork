import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {DialogsElementType, MessageElementType} from "../../../Redux/state";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    addMessage: (textMassage: string) => void
}

export function Dialogs(props: DialogsType) {
    debugger

    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    const newMessage = React.createRef<HTMLInputElement>()

    function sendMessage() {
        if (newMessage.current) {
            const textMessage = newMessage.current?.value
            props.addMessage(textMessage)
        }
    }

    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    {name}

                </div>
                <div className={classes.dialogsMessages}>
                    {message}
                    <input ref={newMessage}/>
                    <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}