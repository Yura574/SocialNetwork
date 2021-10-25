import React from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";


export function MyPosts() {

    const postData = [
        {id: 1, message:'My first post', like: 15},
        {id: 1, message:'My second post', like: 20}
    ]

    return (
        <div >
            <h3 >My posts</h3>
            <div className={classes.postsWrapper}>

            <textarea></textarea>
                <div><button> add</button></div>
            </div>

            <div>
                <Post message={postData[0].message} like={postData[0].like}/>
                <Post message={postData[1].message} like={postData[1].like}/>

            </div>
        </div>
    )
}