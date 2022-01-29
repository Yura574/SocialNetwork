import React from "react";
import {addMessageAC, DialogsElementType, MessageElementType, updateNewMessageAC} from "../../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessageText: string
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessage: (newText: string) => void
}
export type DialogsStatePropsType= MapDispatchToPropsType & MapStateToPropsType


const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessage: (newText: string) => {
            dispatch(updateNewMessageAC(newText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)