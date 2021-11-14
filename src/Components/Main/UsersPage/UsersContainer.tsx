import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type UsersAPIComponentsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void

    pageSize: number
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersAPIComponent extends React.Component <UsersAPIComponentsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onChangePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onChangePage={this.onChangePage }/>

    }
}

const
    mapStateToProps = (state: StateType): MapStateToPropsType => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage
        }
    }

const
    mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
        return {
            follow: (userId: number) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId) => {
                dispatch(unFollowAC(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users))
            },
            setCurrentPage: (currentPage) => {
                dispatch(setCurrentPageAC(currentPage))
            },
            setTotalUsersCount: (totalUsersCount) => {
                dispatch(setTotalUsersCountAC(totalUsersCount))
            }
        }
    }


const
    UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default UsersContainer


