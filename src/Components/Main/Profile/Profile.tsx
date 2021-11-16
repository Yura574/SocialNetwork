import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "./ProfileContainer";

type ProfileType = {
    profile: ProfileUserType | null
}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}