import React from "react";
import classes from "./Post.module.css";

type PostType = {
    message: string;
    like: number
}

export function Post(props: PostType) {
    return(
        <div className={classes.post}>
            <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="avatar"/>
            <span>{props.message}</span>
            <div>{props.like}</div>
        </div>
    )
}