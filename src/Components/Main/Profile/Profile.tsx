import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";



export function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}