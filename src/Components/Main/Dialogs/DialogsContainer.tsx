import React from "react";
import {addMessageAC, onChangeMessageTextAC} from "../../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {store} from "../../../Redux/Redux-store";
import {ActionTypes, StateType} from "../../../Redux/state";
import {connect} from "react-redux";

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

export const mapStateToProps = (state: StateType) => {
    debugger
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: any) => {
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


