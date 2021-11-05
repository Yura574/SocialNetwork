import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../../Redux/users_reducer";
import {Users} from "./User";


type MapStateToPropsType = {
    users: Array<UserType>
    // name: Array<sri>
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        // name: state.usersPage.users.map( n => <div> n.name</div>)
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    debugger
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer


