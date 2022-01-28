import React from "react";
import {addMessageAC, updateNewMessageAC} from "../../../Redux/dialogsReducer";
import {StoreType} from "../../../Redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: StoreType
}

export function DialogsContainer(props: DialogsType) {
    const state = props.store.getState().dialogsPage

    function sendMessage() {
        props.store.dispatch(addMessageAC())
    }

    function onChangeNewMessage(textMessage: string) {
        props.store.dispatch(updateNewMessageAC(textMessage))
    }

    return (
        <Dialogs dialogsData={state.dialogsData}
                 messageData={state.messageData}
                 newMessageText={state.newMessageText}
                 sendMessage={sendMessage}
                 updateNewMessageAC={onChangeNewMessage}/>
    )
}