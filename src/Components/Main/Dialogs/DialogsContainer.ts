import {
    addMessageAC,
    DialogsElementType,
    MessageElementType,
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
}

type MapDispatchToProps = {
    sendMessage: (newMessage: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}


export default compose<ComponentType>(withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)


