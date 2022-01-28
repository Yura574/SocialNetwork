import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../../Redux/profileReducer";
import {StoreType} from "../../../../Redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    store: StoreType
}

export function MyPostsContainer(props: MyPostsType) {

    // const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        props.store.dispatch(addPostAC())
    }

    function newPostText(newText: string) {

        props.store.dispatch(updateNewPostTextAC(newText))

    }


    return (
        <MyPosts postData={props.store.getState().profilePage.postData}
                 newPostText={props.store.getState().profilePage.newPostText}
                 addPost={addPost}
                 updateNewPostTextAC={newPostText}
        />
    )
}