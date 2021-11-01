import React from "react";
import {StoreType} from "../../../../Redux/state";
import {addPostAC, onChangePostTextAC} from "../../../../Redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../../StoreContext";
import {store} from "../../../../Redux/Redux-store";
//
// type MyPostsContainer = {
//     store: StoreType
//
// }


export function MyPostsContainer() {
    return     <StoreContext.Consumer>{
        (store) => {
            const addPost = () => {
                store.dispatch(addPostAC())
            }

            const onChangePost = (postText: string) => {
               store.dispatch(onChangePostTextAC(postText))
            }

            const state = store.getState().profilePage

            return (
                <MyPosts onChangePost={onChangePost}
                         postData={state.postData}
                         newPost={state.newPost}
                         addPost={addPost}
                />)
        }
    }

    </StoreContext.Consumer>



}