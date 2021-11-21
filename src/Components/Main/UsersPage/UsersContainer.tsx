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
import {Redirect} from "react-router";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageThunkCreator: (pageNumber: number, pageSize: number) => void
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}

type UsersAPIComponentsType = MapDispatchToPropsType & MapStateToPropsType


export class UsersAPIComponent extends React.Component <UsersAPIComponentsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber: number) => {
        this.props.onPageThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        // if (!this.props.isAuth){return <Redirect to={'login'}/>}
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   followingProgress={this.props.followingProgress}

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
        followingProgress: state.usersPage.followingProgress,
        isAuth: state.auth.isAuth

    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    getUsersThunkCreator,
    onPageThunkCreator,
    unfollowThunkCreator,
    followThunkCreator


}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


