import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {
    ActionType,

    DialogsElementType,
    MessageElementType,

} from "../../../Redux/state";
import {addMessageAC, updateNewMessageAC} from "../../../Redux/dialogsReducer";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export function Dialogs(props: DialogsType) {

    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    function sendMessage() {
            props.dispatch(addMessageAC())
    }
    function onChangeNewMessage(e: ChangeEvent<HTMLInputElement>) {
        let textMessage = e.currentTarget.value
            props.dispatch(updateNewMessageAC(textMessage))
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
                    <input  value={props.newMessageText} onChange={onChangeNewMessage}/>
                    <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}