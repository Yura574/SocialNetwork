import {
    ActionTypes,
    AddMessageAC_Type,
    MessageElementType,
    MessagesPage,
    OnChangeMessageText_type,
} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE'
const ON_CHANGE_MESSAGE_TEXT = 'ON_CHANGE_MESSAGE_TEXT'

const initialState: MessagesPage = {
    dialogsData: [
        {id: 1, name: 'Yura'},
        {id: 2, name: 'Alenka'},
        {id: 3, name: 'Alenka'},
        {id: 4, name: 'Alenka'},
        {id: 5, name: 'Alenka'},
    ],
    messageData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What car is you bought?'},
        {id: 3, message: 'What '},
        {id: 4, message: 'What car '},
        {id: 5, message: 'What car is ?'},
        {id: 6, message: 'What car is you ?'},
        {id: 7, message: 'What car is you bought?'},
    ],
    newMessage: 'ddd'
}

export const dialogs_reducer = (state: MessagesPage = initialState, action: ActionTypes) => {
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