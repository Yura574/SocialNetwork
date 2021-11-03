import {connect} from "react-redux";
import {User} from "./User";
import {StateType} from "../../../Redux/Redux-store";
import {followAC, UsersPage} from "../../../Redux/users_reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UsersPage
}
type MapDispatchToProps = {
    follow: (userId: number) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        }
    }
}


export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)