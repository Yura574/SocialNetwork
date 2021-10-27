import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostElementType, ProfilePage} from "../../../Redux/state";

type ProfileType ={
    postData: Array<PostElementType>
    addPost: (textPost: string) => void
}


export function Profile(props: ProfileType) {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}