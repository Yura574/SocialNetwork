import React, {ChangeEvent} from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {ActionType,  PostElementType, } from "../../../../Redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../../Redux/profileReducer";

type MyPostsType = {
    postData: Array<PostElementType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export function MyPosts(props: MyPostsType) {

    // const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        props.dispatch(addPostAC())
    }

    function newPostText(e: ChangeEvent<HTMLTextAreaElement>) {

            const newText = e.currentTarget.value
            props.dispatch(updateNewPostTextAC(newText))

    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>

                <textarea  onChange={newPostText} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}> add</button>
                </div>
            </div>

            <div>

                {props.postData.map(p => <Post message={p.message} like={p.like}/>)}

            </div>
        </div>
    )
}