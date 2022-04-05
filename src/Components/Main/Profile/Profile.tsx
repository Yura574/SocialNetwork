import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";



export function Profile() {
    return (
        <div>
            <ProfileInfoContainer/>
            <MyPostsContainer />
        </div>
    )
}