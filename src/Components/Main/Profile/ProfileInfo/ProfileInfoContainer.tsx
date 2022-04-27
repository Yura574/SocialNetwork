import React, {ComponentType} from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {StoreType} from "../../../../Redux/redux-store";
import {addProfile, getStatus, ProfileType, setProfile} from "../../../../Redux/profileReducer";
import {Preloader} from "../../../../preloder/Preloader";
import {setPreloader} from "../../../../Redux/userReducer";
import { RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";
import {authMe} from "../../../../Redux/authReducer";
import { compose } from "redux";

type ProfileInfoAPIContainerType = MapStateToProps & MapDispatchToProps
type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileInfoAPIContainerType

export class ProfileInfoAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '20685'
        }
        this.props.getStatus(userId)

        this.props.setProfile(userId )
        // this.props.authMe()

    }

    render() {
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
    // isAuth: boolean
}
type MapDispatchToProps = {
    addProfile: (profile: ProfileType) => void
    setPreloader: (turnOnOf: boolean)=> void
    setProfile: (userId: string) => void
    authMe: () => void
    getStatus: (userId: string) => void
}

const mapStateToProps = (state: StoreType): MapStateToProps => ({
    profile: state.profilePage.profile,
    preloader: state.usersPage.preloader,
})
const mapDispatchToProps: MapDispatchToProps = {
    setPreloader,
    addProfile,
    setProfile,
    authMe,
    getStatus
}


export const ProfileInfoContainer = compose<ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        withRouter,
        withAuthRedirect,
    )(ProfileInfoAPIContainer)