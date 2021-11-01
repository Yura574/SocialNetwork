import React from "react";
import {StoreType} from "../../../../Redux/state";
import {addPostAC, onChangePostTextAC} from "../../../../Redux/profile_reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainer = {
    store: StoreType

}


export function MyPostsContainer(props: MyPostsContainer) {
    // debugger
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onChangePost = (postText: string) => {
                props.store.dispatch(onChangePostTextAC(postText))
    }

    const state = props.store.getState().profilePage

    return (
        <MyPosts onChangePost={onChangePost}
                 postData={state.postData}
                 newPost={state.newPost}
                 addPost={addPost}
        />
    )
}