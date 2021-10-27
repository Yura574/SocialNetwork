import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {MessagesPage} from "../../../Redux/state";


export function Dialogs(props: MessagesPage) {
debugger

    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    const newMessage = React.createRef<HTMLInputElement>()

    function sendMessage() {
    const textMessage = newMessage.current?.value
        alert(textMessage)
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
                    <input ref={newMessage}/> <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}