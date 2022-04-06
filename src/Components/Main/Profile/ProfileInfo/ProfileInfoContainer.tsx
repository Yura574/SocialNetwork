import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {StoreType} from "../../../../Redux/redux-store";
import {addProfile, ProfileType, setProfile} from "../../../../Redux/profileReducer";
import {Preloader} from "../../../../preloder/Preloader";
import {setPreloader} from "../../../../Redux/userReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {stat} from "fs";

type ProfileInfoAPIContainerType = MapStateToProps & MapDispatchToProps
type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileInfoAPIContainerType

export class ProfileInfoAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '20685'
        }
        this.props.setProfile(userId )
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <>
            {this.props.preloader
                ? <Preloader/>
                : <ProfileInfo profile={this.props.profile}
                />
            }
        </>
    }
}

type MapStateToProps = {
    profile: ProfileType | null
    preloader: boolean
    isAuth: boolean
}
type MapDispatchToProps = {
    addProfile: (profile: ProfileType) => void
    setPreloader: (turnOnOf: boolean)=> void
    setProfile: (userId: string) => void
}

const mapStateToProps = (state: StoreType): MapStateToProps => ({
    profile: state.profilePage.profile,
    preloader: state.usersPage.preloader,
    isAuth: state.auth.isAuth
})
const mapDispatchToProps: MapDispatchToProps = {
    setPreloader,
    addProfile,
    setProfile
}

const ProfileInfoWithRoute = withRouter(ProfileInfoAPIContainer)

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoWithRoute)