import React from "react";
import classes from "./Post.module.css";

export function Post() {
    return(
        <div className={classes.post}>
            <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="avatar"/>
            <span>Post 1</span>
            <div>like</div>
        </div>
    )
}