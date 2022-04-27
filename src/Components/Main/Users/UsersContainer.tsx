import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {
    follow, followThunk, getUsersThunk,
    setCurrentPage, setFollowingInProgress,
    setPreloader,
    setTotalUserCount,
    setUsers,
    unfollow,
    UserType
} from "../../../Redux/userReducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Redirect} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalUserCount: number
    pageSize: number
    preloader: boolean
    followingInProgress: number[]
    // isAuth: boolean
}
type MapDispatchToProps = {
    follow: (userIs: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUserCount: (totalUserCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setPreloader: (turnOnOff: boolean) => void
    setFollowingInProgress: (progress: boolean, userId: number) => void
    getUsersThunk: (pageSize: number, currentPage: number) => void
    followThunk: (userId: number, subscribe: boolean) => void
}
export type UsersAPIComponentType = MapStateToPropsType & MapDispatchToProps

const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        preloader: state.usersPage.preloader,
        followingInProgress: state.usersPage.followingInProgress,
        // isAuth: state.auth.isAuth

    }
}

const mapDispatchToProps: MapDispatchToProps ={
    follow,
    unfollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    setPreloader,
    setFollowingInProgress,
    getUsersThunk,
    followThunk,
}


export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.getUsersThunk(this.props.pageSize, pageNumber)
    }
    followAPI = (userId: number, subscribe: boolean) => {
        this.props.followThunk(userId, subscribe)
    }




    render() {

        return (
            <>
                {/*{!this.props.isAuth && <Redirect to={'login'}/>}*/}
                    <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                follow={this.followAPI}
                changeCurrentPage={this.changeCurrentPage}
                preloader={this.props.preloader}
                followingInProgress={this.props.followingInProgress}
            />
            </>
        )
    }
}

export const UsersContainer = compose<ComponentType>(
    connect(MapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(UsersAPIComponent)