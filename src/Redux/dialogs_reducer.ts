import {
    ActionTypes,
    AddMessageAC_Type,
    MessageElementType,
    MessagesPage,
    OnChangeMessageText_type,
} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE'
const ON_CHANGE_MESSAGE_TEXT = 'ON_CHANGE_MESSAGE_TEXT'

export const dialogs_reducer = (state: MessagesPage, action: ActionTypes) => {
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

export const onChangeMessageTextAC = (messageText: string): OnChangeMessageText_type => ({
    type: ON_CHANGE_MESSAGE_TEXT,
    newMessageText: messageText
})