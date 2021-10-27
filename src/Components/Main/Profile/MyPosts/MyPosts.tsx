import React from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {PostElementType} from "../../../../Redux/state";

type MyPostsType = {
    postData: Array<PostElementType>
    addPost: (textPost: string) => void
}

export function MyPosts(props: MyPostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        if (newPostElement.current) {
            const textPost = newPostElement.current?.value
            props.addPost(textPost)
            newPostElement.current.value = ''
        }
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>

                <textarea ref={newPostElement}></textarea>
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