export  type AddMessageACType = {
    type: "ADD_MESSAGE"
    messageText: string
}
export  type UpdateNewMessageACType = {
    type: "UPDATE_NEW_MESSAGE"
    newMessage: string
}

export const ADD_MESSAGE = "ADD_MESSAGE"
export const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"
export type ActionType = AddMessageACType | UpdateNewMessageACType


export type DialogsElementType = {
    id: number
    name: string
}
export type MessageElementType = {
    id: number,
    message: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessageText: string
}

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message: MessageElementType = {
                id: 7,
                message: action.messageText
            }
            return {
                ...state,
                messageData: [...state.messageData, message,],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
}

export const addMessageAC = (messageText: string): AddMessageACType => ({type: ADD_MESSAGE, messageText})

export const updateNewMessageAC = (newMessage: string): UpdateNewMessageACType => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: newMessage
})
