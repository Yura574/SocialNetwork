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
    newMessage: string
}
export type ProfilePage = {
    postData: Array<PostElementType>
    newPost: string
}

export type StateType = {
    messagesPage: MessagesPage
    profilePage: ProfilePage
}
export type StoreType = {
    _state: StateType
    _setRender: (_state: StateType) => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostAC_Type | OnChangePostTextAC_Type | AddMessageAC_Type| OnChangeMessageTextAC_Type
export type AddPostAC_Type = {
    type: "ADD_POST"
}
export type OnChangePostTextAC_Type = {
    type: "ON_CHANGE_POST_TEXT"
    newPostText: string
}
export type AddMessageAC_Type = {
    type: "ADD_MESSAGE"
}
export type OnChangeMessageTextAC_Type = {
    type: "ON_CHANGE_MESSAGE_TEXT"
    newMessageText: string
}


export let store: StoreType = {
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
            newMessage: 'ddd'
        },

        profilePage: {
            postData: [
                {id: 1, message: 'My first post', like: 15},
                {id: 1, message: 'My second post', like: 20}
            ],
            newPost: 'aaa'
        }
    },
    _setRender() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._setRender = observer
    },
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            const post: PostElementType = {
                id: 2,
                message: this.getState().profilePage.newPost,
                like: 0
            }
            this.getState().profilePage.postData.push(post)
            this.getState().profilePage.newPost = ''
            this._setRender(this.getState())
        }
        if (action.type === ON_CHANGE_POST_TEXT) {
            this.getState().profilePage.newPost = action.newPostText
                this._setRender(this.getState())
        }
        if (action.type === 'ADD_MESSAGE') {
            const message: MessageElementType = {
                id: 5,
                message: this.getState().messagesPage.newMessage
            }
            this.getState().messagesPage.messageData.push(message)
            this.getState().messagesPage.newMessage = ''
            this._setRender(this.getState())
        }
        if (action.type === ON_CHANGE_MESSAGE_TEXT) {
            this.getState().messagesPage.newMessage = action.newMessageText
            this._setRender(this.getState())
        }
    }

}

const ADD_POST = "ADD_POST"
const ON_CHANGE_POST_TEXT = "ON_CHANGE_POST_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"
const ON_CHANGE_MESSAGE_TEXT = "ON_CHANGE_MESSAGE_TEXT"

export const addPostAC = (): AddPostAC_Type => ({
    type: ADD_POST
})

export const onChangePostTextAC = (newPostText: string): OnChangePostTextAC_Type => ({
    type: ON_CHANGE_POST_TEXT,
    newPostText: newPostText
})
export const addMessageAC = (): AddMessageAC_Type => ({
    type: ADD_MESSAGE
})
export const onChangeMessageTextAC = (newMessageText: string): OnChangeMessageTextAC_Type => ({
    type: ON_CHANGE_MESSAGE_TEXT,
    newMessageText: newMessageText
})

