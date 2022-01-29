import React, {ChangeEvent} from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {ProfileStatePropsType} from "./MyPostsContainer";



export function MyPosts(props: ProfileStatePropsType) {


    function addPost() {
        props.addPost()
    }

    function newPostText(e: ChangeEvent<HTMLTextAreaElement>) {
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>

                <textarea onChange={newPostText} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}> add</button>
                </div>
            </div>

            <div>

                {props.postData.map(p => <Post key={p.id} message={p.message} like={p.like}/>)}

            </div>
        </div>
    )
}