import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setPreloaderAC,
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
    preloader: boolean
}
type MapDispatchToProps = {
    follow: (userIs: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUserCount: (totalUserCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setPreloader: (turnOnOff: boolean) => void
}
export type UsersAPIComponentType = MapStateToPropsType & MapDispatchToProps

const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        preloader: state.usersPage.preloader
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
        },
        setPreloader: (turnOnOff: boolean) => {
            dispatch(setPreloaderAC(turnOnOff))
        }
    }
}


export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {
this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.setTotalUserCount(data.data.totalCount)
                this.props.setPreloader(false)
            })
    }

    changeCurrentPage = (el: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${el}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.setPreloader(false)
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
                preloader={this.props.preloader}
            />
        )
    }
}

export const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(UsersAPIComponent)