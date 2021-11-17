import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../../common/preloader/Preloader";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

type UsersAPIComponentsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    isFetching: boolean
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

export class UsersAPIComponent extends React.Component <UsersAPIComponentsType> {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            }
        ).then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onChangePage = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)

        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   onChangePage={this.onChangePage}/>
        </>

    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


