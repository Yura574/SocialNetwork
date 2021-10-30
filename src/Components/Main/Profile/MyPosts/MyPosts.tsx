import React, {ChangeEvent} from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {
    AddPostAC_Type,
    OnChangePostTextAC_Type,
    PostElementType
} from "../../../../Redux/state";
import {addPostAC, onChangePostTextAC} from "../../../../Redux/profile_reducer";

type MyPostsType = {
    postData: Array<PostElementType>
    newPost: string
    dispatch: (action: AddPostAC_Type| OnChangePostTextAC_Type )=> void
}


export function MyPosts(props: MyPostsType) {
    const post = props.postData.map(p => <Post message={p.message} like={p.like}/>)
    const onChangePostText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
            let newPostText = e.target.value
            props.dispatch(onChangePostTextAC(newPostText))
    }
    const addPost =() => {
        props.dispatch(addPostAC())
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>
                {post}
                <textarea value={props.newPost} onChange={onChangePostText}/>
                <div>
                    <button onClick={addPost}> add</button>
                </div>
            </div>

            <div>


            </div>
        </div>
    )
}