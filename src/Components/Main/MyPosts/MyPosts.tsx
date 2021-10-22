import React from "react";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            <div>My post</div>
            <textarea></textarea>
            <span><button> add</button></span>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}