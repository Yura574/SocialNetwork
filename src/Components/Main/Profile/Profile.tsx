import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { PostElementType} from "../../../Redux/state";

type ProfileType = {
    postData: Array<PostElementType>
    newPostText: string
    addPost: () => void
    newTextPost: (newText: string) => void
}


export function Profile(props: ProfileType) {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     newTextPost={props.newTextPost}/>
        </div>
    )
}