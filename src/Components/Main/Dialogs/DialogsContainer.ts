 import {addMessageAC, DialogsElementType, MessageElementType, updateNewMessageAC} from "../../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {compose, Dispatch} from "redux";
 import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
 import {ComponentType} from "react";

type MapStateToPropsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessageText: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (messageText: string) => void
    updateNewMessage: (newText: string) => void
}
export type DialogsStatePropsType= MapDispatchToPropsType & MapStateToPropsType


const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText))
        },
        updateNewMessage: (newText) => {
            dispatch(updateNewMessageAC(newText))
        }
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)