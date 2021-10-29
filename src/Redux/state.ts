export let store = {
    _state: {
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
            ],
            newMessageText: ''
        },

        profilePage: {
            postData: [
                {id: 1, message: 'My first post', like: 15},
                {id: 1, message: 'My second post', like: 20}
            ],
            newPostText: ''
        }
    },
    setRender(_state: StateType) {
    },
    setState(){
        return this._state
    },
    addPost() {
    const text: PostElementType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0
    }
    this._state.profilePage.postData.unshift(text)
    this._state.profilePage.newPostText = ''
    this.setRender(this._state)
},
    newTextPost(newText: string) {
        this._state.profilePage.newPostText = newText
        this.setRender(this._state)
    },
    addMessage() {
        const message: MessageElementType = {
            id: 10,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messageData.unshift(message)
        this._state.messagesPage.newMessageText = ''
        this.setRender(this._state)
    },
    addNewMessage(newMessage: string) {
        this._state.messagesPage.newMessageText = newMessage
        this.setRender(this._state)
    },
    subscribe(observer: () => void) {
        this.setRender = observer
    }





}
// let rerender = (state: StateType) => {
//
//     console.log('render')
// }
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
    newMessageText: string
}
export type ProfilePage = {
    postData: Array<PostElementType>
    newPostText: string
}

export type StateType = {
    messagesPage: MessagesPage
    profilePage: ProfilePage
}


// export let state: StateType = {
//     messagesPage: {
//         dialogsData: [
//             {id: 1, name: 'Yura'},
//             {id: 2, name: 'Alenka'},
//             {id: 3, name: 'Alenka'},
//             {id: 4, name: 'Alenka'},
//             {id: 5, name: 'Alenka'},
//         ],
//         messageData: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'What car is you bought?'},
//             {id: 3, message: 'What '},
//             {id: 4, message: 'What car '},
//             {id: 5, message: 'What car is ?'},
//             {id: 6, message: 'What car is you ?'},
//             {id: 7, message: 'What car is you bought?'},
//         ],
//         newMessageText: ''
//     },
//
//     profilePage: {
//         postData: [
//             {id: 1, message: 'My first post', like: 15},
//             {id: 1, message: 'My second post', like: 20}
//         ],
//         newPostText: ''
//     }
//
//
// }

// export function addPost() {
//     const text: PostElementType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         like: 0
//     }
//     state.profilePage.postData.unshift(text)
//     state.profilePage.newPostText = ''
//     rerender(state)
// }

// export function newTextPost(newText: string) {
//     state.profilePage.newPostText = newText
//     rerender(state)
// }

// export function addMessage() {
//     const message: MessageElementType = {
//         id: 10,
//         message: state.messagesPage.newMessageText
//     }
//     state.messagesPage.messageData.unshift(message)
//     state.messagesPage.newMessageText = ''
//     rerender(state)
// }

// export function addNewMessage(newMessage: string) {
//     state.messagesPage.newMessageText = newMessage
//     rerender(state)
// }

// export function subscribe(observer: () => void) {
//     rerender = observer
// }
//
//
