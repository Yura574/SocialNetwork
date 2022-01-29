import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../../../Redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, PostElementType, updateNewPostTextAC} from "../../../../Redux/profileReducer";

type MapStatePropsType = {
    postData: Array<PostElementType>
    newPostText: string

}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type ProfileStatePropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

