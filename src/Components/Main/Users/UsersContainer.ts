import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../../Redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../../Redux/userReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToProps = {
    follow: (userIs: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersType = MapStateToPropsType & MapDispatchToProps

const MapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}
export const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(Users)