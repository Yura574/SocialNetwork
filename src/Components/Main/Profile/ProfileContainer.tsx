import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/Redux-store";

type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
type PhotosType = {
    small: string
    large: string
}

export type ProfileUserType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
type ProfileDataType = {
    profile: ProfileUserType
    setUserProfile: (profile: ProfileUserType) => void

}

export class ProfileData extends React.Component<ProfileDataType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
            <Profile profile={this.props.profile}/>
        </>


    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps = {
    setUserProfile
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileData)