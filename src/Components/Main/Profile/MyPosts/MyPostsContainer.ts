import {connect} from "react-redux";
import {StoreType} from "../../../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, PostElementType, updateNewPostTextAC} from "../../../../Redux/profileReducer";
import {ComponentType} from "react";

type MapStatePropsType = {
    postData: Array<PostElementType>
    newPostText: string

}
type MapDispatchPropsType = {
    addPost: (postText: string) => void
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
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

export const MyPostsContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)

