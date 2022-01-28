import {ActionType, DialogsElementType, MessageElementType, MessagesPage} from "./state";

export  type AddMessageACType = {
    type: "ADD_MESSAGE"
}
export  type UpdateNewMessageACType = {
    type: "UPDATE_NEW_MESSAGE"
    newMessage: string
}

export const ADD_MESSAGE = "ADD_MESSAGE"
export const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

type initialStateType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessageText: string
}

const initialState: initialStateType = {
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
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message: MessageElementType = {
                id: 7,
                message: state.newMessageText
            }
            state.messageData.unshift(message)
            state.newMessageText= ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageACType => ({type: ADD_MESSAGE})

export const updateNewMessageAC = (newMessage: string): UpdateNewMessageACType => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: newMessage
})