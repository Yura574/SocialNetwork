import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../../Redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
 store: StoreType
}


export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}