import {ActionType, AddMessageAC_Type, MessageElementType, MessagesPage, OnChangeMessageTextAC_Type} from "./state";

const ADD_MESSAGE = "ADD_MESSAGE"
const ON_CHANGE_MESSAGE_TEXT = "ON_CHANGE_MESSAGE_TEXT"


export const dialogs_reducer = (state: MessagesPage, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message: MessageElementType = {
                id: 5,
                message: state.newMessage
            }
            state.messageData.push(message)
            state.newMessage = ''
            return state
        case ON_CHANGE_MESSAGE_TEXT:
            state.newMessage = action.newMessageText
            return state
        default:
            return state
    }
}


export const addMessageAC = (): AddMessageAC_Type => ({
    type: ADD_MESSAGE
})
export const onChangeMessageTextAC = (newMessageText: string): OnChangeMessageTextAC_Type => ({
    type: ON_CHANGE_MESSAGE_TEXT,
    newMessageText: newMessageText
})