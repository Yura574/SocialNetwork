import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostElementType} from "../../../Redux/state";

type ProfileType = {
    postData: Array<PostElementType>
    newPost: string
    dispatch: (action: ActionTypes) => void
}


export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     newPost={props.newPost}
                     dispatch={props.dispatch}
            />
        </div>
    )
}