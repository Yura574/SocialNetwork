import React from "react";
import {StoreType} from "../../../Redux/state";
import {addMessageAC, onChangeMessageTextAC} from "../../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {store} from "../../../Redux/Redux-store";

type DialogsType = {
    store: StoreType
}


export function DialogsContainer(props: DialogsType) {
debugger
    // const state = props.store.getState().dialogsPage

    const sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeMessageText = (messageText: string) => {

        props.store.dispatch(onChangeMessageTextAC(messageText))
    }


    return (
        <Dialogs dialogsData={store.getState().messagesPage.dialogsData}
                 messageData={store.getState().messagesPage.messageData}
                 newMessage={store.getState().messagesPage.newMessage}
                 sendMessage={sendMessage}
                 onChangeMessageText={onChangeMessageText}
        />
    )
}