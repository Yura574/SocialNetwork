export type DialogsElementType = {
    id: number
    name: string
}
export type MessageElementType = {
    id: number,
    message: string
}
export type MessagesPage = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
}

type AddMessageAC_Type = {
    type: 'ADD_MESSAGE'
    newMessage: string
}

const ADD_MESSAGE = 'ADD_MESSAGE'

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
}

export const dialogs_reducer = (state: MessagesPage = initialState, action: AddMessageAC_Type ): MessagesPage => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = action.newMessage
            return {
                ...state,
                messageData: [...state.messageData, {id: 5, message: message}]
            }
        default:
            return state
    }
}

export const addMessageAC = (newMessage:string): AddMessageAC_Type => ({
    type: ADD_MESSAGE,
    newMessage
})