import {
    addMessageAC,
    DialogsElementType,
    MessageElementType,
    onChangeMessageTextAC
} from "../../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../redirect/withAuthRedirect";
import {ComponentType} from "react";


type MapStateToPropsType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
}

type MapDispatchToProps = {
    sendMessage: () => void
    onChangeMessageText: (text: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        onChangeMessageText: (text: string) => {
            dispatch(onChangeMessageTextAC(text))
        }
    }
}


export default compose<ComponentType>(withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)


