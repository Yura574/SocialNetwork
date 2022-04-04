import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../../Redux/userReducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalUserCount: number
    pageSize: number
}
type MapDispatchToProps = {
    follow: (userIs: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUserCount: (totalUserCount: number) => void
    setCurrentPage: (currentPage: number) => void
}
export type UsersAPIComponentType = MapStateToPropsType & MapDispatchToProps

const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize
    }

}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}


export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.setTotalUserCount(data.data.totalCount)
                console.log(data)
            })
    }

    changeCurrentPage = (el: number) => {
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${el}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                console.log(data.data.items)
            })
    }

    render() {

        return (
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                changeCurrentPage={this.changeCurrentPage}
            />
        )
    }
}

export const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(UsersAPIComponent)