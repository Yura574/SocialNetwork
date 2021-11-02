// import {profile_reducer} from "./profile_reducer";
// import {dialogs_reducer} from "./dialogs_reducer";
export type A = {

}
 type DialogsElementType = {
    id: number
    name: string
}
 type MessageElementType = {
    id: number,
    message: string
}
 type PostElementType = {
    id: number,
    message: string,
    like: number
}

 type MessagesPage = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    newMessage: string
}
 type ProfilePage = {
    postData: Array<PostElementType>
    newPost: string
}
//

 type StateType = {
    profilePage: ProfilePage
    dialogsPage: MessagesPage
}

 type StoreType = {

    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void

}

 type ActionTypes =
    AddPostAC_Type |
    OnChangePostText_Type |
    AddMessageAC_Type |
    OnChangeMessageText_type

 type AddPostAC_Type = {
    type: 'ADD_POST'
}
 type OnChangePostText_Type = {
    type: 'ON_CHANGE_POST_TEXT'
    newPostText: string
}
 type AddMessageAC_Type = {
    type: 'ADD_MESSAGE'
}
 type OnChangeMessageText_type = {
    type: 'ON_CHANGE_MESSAGE_TEXT',
    newMessageText: string
}


// export let store: StoreType = {
//     _state: {
//         messagesPage: {
//             dialogsData: [
//                 {id: 1, name: 'Yura'},
//                 {id: 2, name: 'Alenka'},
//                 {id: 3, name: 'Alenka'},
//                 {id: 4, name: 'Alenka'},
//                 {id: 5, name: 'Alenka'},
//             ],
//             messageData: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'What car is you bought?'},
//                 {id: 3, message: 'What '},
//                 {id: 4, message: 'What car '},
//                 {id: 5, message: 'What car is ?'},
//                 {id: 6, message: 'What car is you ?'},
//                 {id: 7, message: 'What car is you bought?'},
//             ],
//             newMessage: 'ddd'
//         },
//
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'My first post', like: 15},
//                 {id: 1, message: 'My second post', like: 20}
//             ],
//             newPost: 'aaa'
//         }
//     },
//     _setState(_state) {
//
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._setState = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profile_reducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogs_reducer(this._state.messagesPage, action)
//         this._setState(this._state)
//     }
//
//
// }


