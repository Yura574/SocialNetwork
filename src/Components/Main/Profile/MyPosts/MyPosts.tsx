import React from "react";
import {Post} from "../Post/Post";


export function MyPosts() {
    return (
        <div>
            <div>My post</div>
            <textarea></textarea>
            <span><button> add</button></span>
            <div>
                <Post message={'My first post'} like={15}/>
                <Post message={'My second post'} like={20}/>

            </div>
        </div>
    )
}