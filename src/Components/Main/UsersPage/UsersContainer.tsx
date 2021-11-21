import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    onPageThunkCreator,
    unfollowThunkCreator,
    UserType,
} from "../../../Redux/users_reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../../common/preloader/Preloader";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

type MapDispatchToPropsType = {
    // follow: (userId: number) => void
    // unFollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // setToggleIsFetching: (isFetching: boolean) => void
    // setFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageThunkCreator: (pageNumber: number, pageSize: number) => void
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}

type UsersAPIComponentsType = MapDispatchToPropsType & MapStateToPropsType
// {
// users: Array<UserType>
// totalUsersCount: number
// currentPage: number
// follow: (userId: number) => void
// unFollow: (userId: number) => void
// isFetching: boolean
// pageSize: number
// setCurrentPage: (currentPage: number) => void
// setUsers: (users: Array<UserType>) => void
// setTotalUsersCount: (totalUsersCount: number) => void
// setToggleIsFetching: (isFetching: boolean) => void
// followingProgress: Array<number >
// setFollowingInProgress: (isFetching: boolean, userId: number) => void
// }

export class UsersAPIComponent extends React.Component <UsersAPIComponentsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.setToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     }
        // )
    }

    onChangePage = (pageNumber: number) => {
        this.props.onPageThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.setToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     }
        // )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   followingProgress={this.props.followingProgress}
                // follow={this.props.follow}
                // unFollow={this.props.unFollow}
                // setFollowingInProgress={this.props.setFollowingInProgress}

                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}
            />
        </>

    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress

    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    // follow,
    // unFollow,
    // setFollowingInProgress,
    // setCurrentPage,
    // setTotalUsersCount,
    // setToggleIsFetching,
    // setUsers,

    getUsersThunkCreator,
    onPageThunkCreator,
    unfollowThunkCreator,
    followThunkCreator


}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


