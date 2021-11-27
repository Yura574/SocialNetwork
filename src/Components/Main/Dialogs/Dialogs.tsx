import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsElementType, MessageElementType} from "../../../Redux/dialogs_reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsItem} from "./DialogsItem";

type DialogsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
    sendMessage: (values: string) => void
    onChangeMessageText: (messageText: string) => void
    id: number
}

type MessageFormType = {
    message: string
}

export function Dialogs(props: DialogsType) {

    const name = props.dialogsData.map(d =>  <div>{d.name}</div>)
    const message = props.messageData.map(m => <div> {m.message}</div>)

    const onSubmit = (values: any ) => {
        props.sendMessage(values.newMessage)
    }
    return (
        <div>
            <div>Dialogs</div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsName}>
                    <div><DialogsItem name={name} id={props.id}/></div>
                </div>
                <div className={classes.dialogsMessages}>
                    {message}
                    <NewMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

const NewMessage=(props: InjectedFormProps<MessageFormType>) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessage'} component={'input'}/>
            <button > send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm<MessageFormType>({form: 'newMessage'})(NewMessage)