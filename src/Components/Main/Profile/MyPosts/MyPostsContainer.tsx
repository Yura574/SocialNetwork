import React from "react";

import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, onChangePostTextAC, PostElementType} from "../../../../Redux/profile_reducer";
import {StateType} from "../../../../Redux/Redux-store";
import {Dispatch} from "redux";

type MapStateToProps = {
    postData: Array<PostElementType>
    newPost: string
}
type MapDispatchToProps = {
    addPost: () => void
    onChangePost: (text: string) => void
}

export const mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        postData: state.profilePage.postData,
        newPost: state.profilePage.newPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
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


