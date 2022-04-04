import {connect} from "react-redux";
import {Users} from "./Users";
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
export type UsersType = MapStateToPropsType & MapDispatchToProps

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
export const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(Users)