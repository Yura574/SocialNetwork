import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "./ProfileContainer";

type ProfileType = {
    profile: ProfileUserType | null
    status:string
    updateStatus: (status: string) => void
}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={ props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}