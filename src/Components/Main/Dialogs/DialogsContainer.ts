 import {addMessageAC, DialogsElementType, MessageElementType, updateNewMessageAC} from "../../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
 import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

type MapStateToPropsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessageText: string
    isAuth: boolean
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
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessage: (newText) => {
            dispatch(updateNewMessageAC(newText))
        }
    }
}
const DialogsWithAuthRedirect = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)