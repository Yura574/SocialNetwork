import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyPostContainer from "./MyPosts/MyPostsContainer";
// import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// type ProfileType = {
//     store: StoreType
// }


export function Profile() {
    return (
        <div>
            <ProfileInfo/>
<MyPostContainer />
        </div>
    )
}