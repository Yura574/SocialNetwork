import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {AddPostAC_Type, OnChangePostText_Type, PostElementType} from "../../../../Redux/state";
import {addPostAC, onChangePostTextAC} from "../../../../Redux/profile_reducer";

type MyPostsType = {
    postData: Array<PostElementType>
    newPost: string
    addPost: () => void
    onChangePost: (postText:string) => void
}


export function MyPosts(props: MyPostsType) {
    const addPost = () => {
        props.addPost()
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let post = e.target.value
        props.onChangePost(post)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>
                <textarea value={props.newPost} onChange={onChangePost}/>
                <div>
                    <button onClick={addPost}> add</button>
                </div>
                <div>
                    <div>{props.postData.map(p =>
                        <Post
                            message={p.message}
                            like={p.like}/>)}</div>

                </div>
            </div>


        </div>
    )
}