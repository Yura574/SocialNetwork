import React from "react";
import {
    addMessageAC,
    DialogsElementType,
    MessageElementType,
    onChangeMessageTextAC
} from "../../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";

// export function DialogsContainer() {
//         const sendMessage = () => {
//             store.dispatch(addMessageAC())
//         }
//         const onChangeMessageText = (messageText: string) => {
//
//            store.dispatch(onChangeMessageTextAC(messageText))
//         }
//
//
//         return (
//             <Dialogs dialogsData={store.getState().messagesPage.dialogsData}
//                      messageData={store.getState().messagesPage.messageData}
//                      newMessage={store.getState().messagesPage.newMessage}
//                      sendMessage={sendMessage}
//                      onChangeMessageText={onChangeMessageText}
//             />
//         )
//     }

type MapStateToPropsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
}

type MapDispatchToProps = {
    sendMessage: () => void
    onChangeMessageText: (text: string) => void
}


export const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    debugger
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        onChangeMessageText: (text: string) => {
            dispatch(onChangeMessageTextAC(text))
        }
    }
}


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogContainer


