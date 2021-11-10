import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UserType} from "../../../Redux/users_reducer";
import {Users} from "./User";


type MapStateToPropsType = {
    users: Array<UserType>
    pageCount: number
    currentPage: number
    allPage: number
}

type MapDispatchToProps = {
    followed: (userId: number) => void
    unfollowed: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        currentPage: state.usersPage.currentPage,
        allPage: state.usersPage.allPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        followed: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowed: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page ) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer


