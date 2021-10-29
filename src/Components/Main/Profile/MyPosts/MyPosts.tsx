import React from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import { PostElementType} from "../../../../Redux/state";

type MyPostsType = {
    postData: Array<PostElementType>
    newPostText: string
    addPost: () => void
    newTextPost: (newText: string) => void
}

export function MyPosts(props: MyPostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        props.addPost()
    }

    function newPostText() {
        if (newPostElement.current) {
            const newText = newPostElement.current.value
            props.newTextPost(newText)
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