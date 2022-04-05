import {connect} from "react-redux";
import {StoreType} from "../../../Redux/redux-store";
import {
    follow,
    setCurrentPage, setPreloader,
    setTotalUserCount,
    setUsers,
    unfollow,
    UserType
} from "../../../Redux/userReducer";
import React from "react";
import {Users} from "./Users";
import {followAPI, userAPI} from "../../../api/api";

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

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUserCount: (totalUserCount: number) => {
//             dispatch(setTotalUserCountAC(totalUserCount))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setPreloader: (turnOnOff: boolean) => {
//             dispatch(setPreloaderAC(turnOnOff))
//         }
//     }
// }
//

export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {
        this.props.setPreloader(true)

        userAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.setTotalUserCount(data.data.totalCount)
                this.props.setPreloader(false)
            })
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.setPreloader(false)
            })
    }
    followAPI = (userId: number) => {
        this.props.setPreloader(true)
        followAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.unfollow(userId)
                }
                this.props.setPreloader(false)

            })
    }

    unfollowAPI = (userId: number) => {
        this.props.setPreloader(true)
        followAPI.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.follow(userId)
                }
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
                follow={this.followAPI}
                unfollow={this.unfollowAPI}
                changeCurrentPage={this.changeCurrentPage}
                preloader={this.props.preloader}
            />
        )
    }
}

export const UsersContainer = connect(MapStateToProps, {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalUserCount,
    setUsers,
    unfollow
})(UsersAPIComponent)