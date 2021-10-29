import React from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {ActionType, addPostAction, changeAction, PostElementType} from "../../../../Redux/state";

type MyPostsType = {
    postData: Array<PostElementType>
    newPostText: string
    dispatch: (action: ActionType) => void
}


export function MyPosts(props: MyPostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {

        props.dispatch(addPostAction())
    }

    function newPostText() {

        if (newPostElement.current) {
            const newText = newPostElement.current.value
            props.dispatch(changeAction(newText))
        }
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>

                <textarea ref={newPostElement} onChange={newPostText} value={props.newPostText}/>
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