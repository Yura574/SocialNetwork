import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/Redux-store";
import {RouteComponentProps, withRouter} from "react-router";

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
type MapStateToPropsType = {
   profile: ProfileUserType | null
}
type MapDispatchToPropsType = {
   setUserProfile: (profile: ProfileUserType) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileDataType

type ProfileDataType = MapStateToPropsType & MapDispatchToPropsType
export class ProfileData extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
             <Profile profile={this.props.profile}/>
        </>


    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps : MapDispatchToPropsType = {
    setUserProfile
}

let ProfileDataWithRoute = withRouter(ProfileData)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileDataWithRoute)