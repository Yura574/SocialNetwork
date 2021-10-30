import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {
    ActionType,
    addMessageAC,
    DialogsElementType,
    MessageElementType,
    onChangeMessageTextAC,
} from "../../../Redux/state";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
    dispatch: (action: ActionType) => void
}


export function Dialogs(props: DialogsType) {
    debugger
    const names = props.dialogsData.map(p => <div>{p.name}</div>)
    const messages = props.messageData.map(m => <div>{m.message}</div>)

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        const message = e.target.value
        props.dispatch(onChangeMessageTextAC(message))
    }
    const sendMessage = () => {
        props.dispatch(addMessageAC())
    }
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    <div>{names} </div>

                </div>
                <div className={classes.dialogsMessages}>
                    {messages}
                    <input
                        value={props.newMessage}
                        onChange={onChangeMessage}/>
                    <button onClick={sendMessage}> send</button>
                </div>
            </div>
        </div>
    )
}