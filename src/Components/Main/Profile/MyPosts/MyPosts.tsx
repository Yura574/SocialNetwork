import React from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {ProfilePage} from "../../../../Redux/state";


export function MyPosts(props: ProfilePage) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        const text = newPostElement.current?.value
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