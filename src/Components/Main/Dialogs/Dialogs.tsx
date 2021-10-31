import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {ActionTypes, DialogsElementType, MessageElementType,} from "../../../Redux/state";
import {addMessageAC, onChangeMessageTextAC} from "../../../Redux/dialogs_reducer";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
    dispatch: (action: ActionTypes) => void
}


export function Dialogs(props: DialogsType) {

    const name = props.dialogsData.map( d => <div>{d.name}</div>)
    const message = props.messageData.map(m =><div> {m.message}</div>)

    const sendMessage = () => {
        props.dispatch(addMessageAC())
    }
    const onChangeMessageText = (e: ChangeEvent<HTMLInputElement>) => {
        const message = e.target.value
        props.dispatch(onChangeMessageTextAC(message))
    }
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