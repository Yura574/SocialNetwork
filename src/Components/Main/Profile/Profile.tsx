import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../../Redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// type ProfileType = {
//     store: StoreType
// }


export function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}