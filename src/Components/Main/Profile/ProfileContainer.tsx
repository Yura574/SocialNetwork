import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, setPageThunkCreator, updateStatusThunkCreator} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/Redux-store";
import { RouteComponentProps, withRouter} from "react-router";
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
    status: string
}
type MapDispatchToPropsType = {
    setPageThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (userId: string) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileContainerType

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){``
           userId  = '20685'
        }
        this.props.setPageThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return <>
            <Profile profile={this.props.profile} status={ this.props.status} updateStatus={this.props.updateStatusThunkCreator} />
        </>


    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

let mapDispatchToProps: MapDispatchToPropsType = {
    setPageThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}



export default compose<ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)
