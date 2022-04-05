import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {StoreType} from "../../../../Redux/redux-store";
import {addProfile, ProfileType} from "../../../../Redux/profileReducer";
import {Preloader} from "../../../../preloder/Preloader";
import {setPreloader} from "../../../../Redux/userReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {profileAPI} from "../../../../api/api";

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
        this.props.setPreloader(true)
        profileAPI.getCurrentUser(userId)
            .then(response => {
                this.props.addProfile(response.data)
                this.props.setPreloader(false)
            })
        console.log(this.props)
    }

    render() {
        return <>
            {this.props.preloader
                ? <Preloader/>
                : <ProfileInfo profile={this.props.profile}
                />
            }
            ;
        </>
    }
}

type MapStateToProps = {
    profile: ProfileType | null
    preloader: boolean
}
type MapDispatchToProps = {
    addProfile: (profile: ProfileType) => void
    setPreloader: (turnOnOf: boolean)=> void
}

const mapStateToProps = (state: StoreType): MapStateToProps => ({
    profile: state.profilePage.profile,
    preloader: state.usersPage.preloader
})
const mapDispatchToProps: MapDispatchToProps = {
    setPreloader,
    addProfile
}

const ProfileInfoWithRoute = withRouter(ProfileInfoAPIContainer)

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoWithRoute)