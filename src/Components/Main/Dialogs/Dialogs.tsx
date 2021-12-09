import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsElementType, MessageElementType} from "../../../Redux/dialogs_reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsItem} from "./DialogsItem";
import {Element} from "../../../common/FormControls/FormControls";
import {fieldsValidator, maxLengthCreator} from "../../../validators/validators";
import {MessageItem} from "./MessageItem";

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

    const name = props.dialogsData.map(d =>  <div><DialogsItem id={d.id} name={d.name}/></div>)
    const message = props.messageData.map(m => <div> <MessageItem message={m.message} id={m.id}/></div>)

    const onSubmit = (values: any ) => {
        props.sendMessage(values.newMessage)
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
                    <NewMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)
const Input = Element('input')

const NewMessage=(props: InjectedFormProps<MessageFormType>) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessage'}
                   validate={[fieldsValidator, maxLength50]}
                   component={Input}/>
            <button > send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm<MessageFormType>({form: 'newMessage'})(NewMessage)