import {connect} from "react-redux";
import {StateType} from "../../../Redux/Redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    onPageThunkCreator,
    unfollowThunkCreator,
    UserType,
} from "../../../Redux/users_reducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../../../common/preloader/Preloader";
import {withAuthRedirect} from "../../../redirect/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
     getUsersSelector
} from "../../../Redux/user-selected";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

type MapDispatchToPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageThunkCreator: (pageNumber: number, pageSize: number) => void
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}

type UsersContainerType = MapDispatchToPropsType & MapStateToPropsType


export class UserContainer extends React.Component <UsersContainerType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber: number) => {
        this.props.onPageThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
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
//
// const mapStateToProps = (state: StateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingProgress,
//     }
// }
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    getUsersThunkCreator,
    onPageThunkCreator,
    unfollowThunkCreator,
    followThunkCreator


}


export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)
(UserContainer)


