export type DialogsElementType = {
    id: number
    name: string
}
export type MessageElementType = {
    id: number,
    message: string
}
export type PostElementType = {
    id: number,
    message: string,
    like: number
}

export type MessagesPage = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
}
export type ProfilePage = {
    postData: Array<PostElementType>
}

export type DataType = {
    messagesPage: MessagesPage
    profilePage: ProfilePage
}

export type StateType = {
   state: DataType
}


export let state = {
    messagesPage: {
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
        ]
    },

    profilePage: {
        postData: [
            {id: 1, message: 'My first post', like: 15},
            {id: 1, message: 'My second post', like: 20}
        ]
    }


}

