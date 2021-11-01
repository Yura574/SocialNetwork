import React from "react";

import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, onChangePostTextAC} from "../../../../Redux/profile_reducer";
import {StateType} from "../../../../Redux/state";

// export function DialogsContainer() {
//         const sendMessage = () => {
//             store.dispatch(addMessageAC())
//         }
//         const onChangeMessageText = (messageText: string) => {
//
//            store.dispatch(onChangeMessageTextAC(messageText))
//         }
//
//
//         return (
//             <Dialogs dialogsData={store.getState().messagesPage.dialogsData}
//                      messageData={store.getState().messagesPage.messageData}
//                      newMessage={store.getState().messagesPage.newMessage}
//                      sendMessage={sendMessage}
//                      onChangeMessageText={onChangeMessageText}
//             />
//         )
//     }

export const mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.postData,

        newPost: state.profilePage.newPost
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangePost: (text: string) => {
            dispatch(onChangePostTextAC(text))
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostContainer


