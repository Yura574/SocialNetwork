import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setPageThunkCreator} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/Redux-store";
import { RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../../redirect/withAuthRedirect";
import {compose} from "redux";


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
    setPageThunkCreator: (userId: string) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileContainerType

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setPageThunkCreator(userId)
    }

    render() {
        return <>
            <Profile profile={this.props.profile}/>
        </>


    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

let mapDispatchToProps: MapDispatchToPropsType = {
    setPageThunkCreator
}



export default compose<ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)
