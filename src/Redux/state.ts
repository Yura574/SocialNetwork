// import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profileReducer";
// import {AddMessageACType, dialogsReducer, UpdateNewMessageACType} from "./dialogsReducer";
//
// export type DialogsElementType = {
//     id: number
//     name: string
// }
// export type MessageElementType = {
//     id: number,
//     message: string
// }
// export type PostElementType = {
//     id: number,
//     message: string,
//     like: number
// }
// export type MessagesPage = {
//     dialogsData: Array<DialogsElementType>
//     messageData: Array<MessageElementType>
//     newMessageText: string
// }
// export type ProfilePage = {
//     postData: Array<PostElementType>
//     newPostText: string
// }
// export type StateType = {
//     messagesPage: MessagesPage
//     profilePage: ProfilePage
// }
//  type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     rerender: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionType) => void
// }
//
//
// export type ActionType =
//     AddPostACType
//     | UpdateNewPostTextACType
//     | AddMessageACType
//     | UpdateNewMessageACType
//
//
//
//
//  const store: StoreType = {
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
//             newMessageText: ''
//         },
//
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'My first post', like: 15},
//                 {id: 1, message: 'My second post', like: 20}
//             ],
//             newPostText: 'as'
//         }
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this.rerender = observer
//     },
//     rerender() {
//         console.log('render')
//     },
//
//     dispatch(action: ActionType) {
//         this.getState().profilePage = profileReducer(this.getState().profilePage, action)
//         this.getState().messagesPage = dialogsReducer(this.getState().messagesPage, action)
//         return this.rerender()
//     },
// }
//
//
//
//
//

export const a = 1





