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
type StoreType = {
    _state: StateType
    getState: () => StateType
    rerender: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
type AddPostACType = {
    type: "ADD_POST"
}
type UpdateNewPostTextACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
type AddMessageACType = {
    type: "ADD_MESSAGE"
}
type UpdateNewMessageACType = {
    type: "UPDATE_NEW_MESSAGE"
    newMessage: string
}
export type ActionType =
    AddPostACType
    | UpdateNewPostTextACType
    | AddMessageACType
    | UpdateNewMessageACType

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE ="UPDATE_NEW_MESSAGE"

export const store: StoreType = {
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
            newPostText: 'as'
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this.rerender = observer
    },
    rerender() {
        console.log('render')
    },

    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            const text: PostElementType = {
                id: 5,
                message: this.getState().profilePage.newPostText,
                like: 0
            }
            this.getState().profilePage.postData.unshift(text)
            this.getState().profilePage.newPostText = '';
            this.rerender()
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText = action.newText
            this.rerender()
        }
        if (action.type === ADD_MESSAGE) {
            const message: MessageElementType = {
                id: 10,
                message: this.getState().messagesPage.newMessageText
            }
            this.getState().messagesPage.messageData.unshift(message)
            this.getState().messagesPage.newMessageText = ''
            this.rerender()
        }
        if(action.type === UPDATE_NEW_MESSAGE) {
            this.getState().messagesPage.newMessageText = action.newMessage
            this.rerender()
        }
    },
}


export const addPostAC = (): AddPostACType => ({
    type: ADD_POST
})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const addMessageAC = (): AddMessageACType => ({
    type: ADD_MESSAGE
})

export const updateNewMessageAC = (newMessage: string): UpdateNewMessageACType => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: newMessage
})









