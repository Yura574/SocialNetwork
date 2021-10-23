import React from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";


export function MyPosts() {
    return (
        <div >
            <h3 >My posts</h3>
            <div className={classes.postsWrapper}>

            <textarea></textarea>
                <div><button> add</button></div>
            </div>

            <div>
                <Post message={'My first post'} like={15}/>
                <Post message={'My second post'} like={20}/>

            </div>
        </div>
    )
}