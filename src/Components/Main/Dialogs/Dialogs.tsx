import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";
import {MessageItem} from "./MessageItem";
import {DialogsStatePropsType} from "./DialogsContainer";
import {Formik} from "formik";
import SuperInputText from "../../../CommonComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../CommonComponents/c2-SuperButton/SuperButton";


type InitialValueFormikType = {
    messageText: string
}

export function Dialogs(props: DialogsStatePropsType) {


    const name = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const message = props.messageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    function sendMessage(messageText: string) {
        props.sendMessage(messageText)
    }

    function onChangeNewMessage(e: ChangeEvent<HTMLInputElement>) {
        let textMessage = e.currentTarget.value
        props.updateNewMessage(textMessage)
    }
    const initialValue: InitialValueFormikType = {
        messageText: ''
    }
    const validateErrors = (values: InitialValueFormikType) => {
        const errors: Partial<InitialValueFormikType> = {}
        if(!values.messageText){
            errors.messageText = 'message required'
        }
        return errors
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
                    <Formik
                        initialValues={initialValue}
                        validate={validateErrors}
                        onSubmit={(values) => sendMessage(values.messageText)}>
                        {({
                              values,
                              errors,
                              handleSubmit,
                              handleChange
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <SuperInputText
                                    name='messageText'
                                    value={values.messageText}
                                    onChange={handleChange}
                                    placeholder={'message'}
                                />
                                <div>{errors.messageText? errors.messageText : ''}</div>
                                <SuperButton>send</SuperButton>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )
}