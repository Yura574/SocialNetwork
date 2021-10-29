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
export type ActionType = AddPostActionType | NewPostTextActionType | AddMessageActionType | OnChangeNewMessageActionType

export type AddPostActionType ={
    type: "ADD_POST"
}
export type NewPostTextActionType ={
    type: "NEW_TEXT_POST"
    newText: string

}
export type AddMessageActionType ={
    type: "ADD_MESSAGE"
}
export type OnChangeNewMessageActionType ={
    type: "ON_CHANGE_NEW_MESSAGE"
    newMessage: string
}

export type StoreType = {
    _state: StateType
    _setRender: (_state: StateType)=> void
    getState: () => StateType
    addPost:() => void
    newTextPost:(newText: string) => void
    addMessage:()=>void
    addNewMessage:(newMessage: string) => void
    subscribe:(observer: () => void) => void
    dispatch:(action: ActionType) => void
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
    _setRender(_state: StateType) {
    },
    getState(){
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
    this._setRender(this._state)
},
    newTextPost(newText) {
        this._state.profilePage.newPostText = newText
        this._setRender(this._state)
    },
    addMessage() {
        const message: MessageElementType = {
            id: 10,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messageData.unshift(message)
        this._state.messagesPage.newMessageText = ''
        this._setRender(this._state)
    },
    addNewMessage(newMessage) {
        this._state.messagesPage.newMessageText = newMessage
        this._setRender(this._state)
    },
    subscribe(observer) {
        this._setRender = observer
    },
    dispatch(action: ActionType){
        debugger
        if(action.type ==="ADD_POST"){
            const text: PostElementType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.postData.unshift(text)
            this._state.profilePage.newPostText = ''
            this._setRender(this._state)
        }
        if(action.type === "NEW_TEXT_POST"){
            this._state.profilePage.newPostText = action.newText
            this._setRender(this._state)
        }
        if(action.type === "ADD_MESSAGE"){
            const message: MessageElementType = {
                id: 10,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messageData.unshift(message)
            this._state.messagesPage.newMessageText = ''
            this._setRender(this._state)
        }
        if(action.type === "ON_CHANGE_NEW_MESSAGE"){
            this._state.messagesPage.newMessageText = action.newMessage
            this._setRender(this._state)
        }
    }
}
