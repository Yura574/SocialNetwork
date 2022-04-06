import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type UserType = {
    name: string
    id: number
    followed: boolean
    status: string | null
    photos: {
        small: string | null
        large: string | null
    }
}
type InitialStateType = {
    users: Array<UserType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number
    preloader: boolean
    followingInProgress: number[]
}

type ActionType =
    FollowTypeACType
    | UnfollowTypeACType
    | SetUsersTypeACType
    | SetTotalUserCountACType
    | SetCurrentPageACType
    | SetPreloaderACType
    | SetFollowingInProgress


type FollowTypeACType = {
    type: 'FOLLOW'
    userID: number
}
type UnfollowTypeACType = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUsersTypeACType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
type SetTotalUserCountACType = {
    type: 'SET_TOTAL_USER_COUNT',
    totalUserCount: number
}
type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type SetPreloaderACType = {
    type: 'SET_PRELOADER'
    turnOnOff: boolean
}
type SetFollowingInProgress = {
    type: 'SET_FOLLOWING_IN_PROGRESS'
    progress: boolean
    userId: number
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PRELOADER = 'SET_PRELOADER'
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS'

const initialState: InitialStateType = {
    users: [],
    totalUserCount: 0,
    pageSize: 100,
    currentPage: 1,
    preloader: false,
    followingInProgress: []
}
export const userReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : {...user})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : {...user})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users


            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUserCount: action.totalUserCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_PRELOADER:
            return {
                ...state, preloader: action.turnOnOff
            }
        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.progress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => action.userId !== id)
            }

        default:
            return state
    }

}

export const follow = (userID: number): FollowTypeACType => ({
    type: FOLLOW,
    userID
})
export const unfollow = (userID: number): UnfollowTypeACType => ({
    type: UNFOLLOW,
    userID
})
export const setUsers = (users: Array<UserType>): SetUsersTypeACType => ({
    type: SET_USERS,
    users
})
export const setTotalUserCount = (totalUserCount: number): SetTotalUserCountACType => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount
})
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setPreloader = (turnOnOff: boolean): SetPreloaderACType => ({
    type: SET_PRELOADER,
    turnOnOff
})
export const setFollowingInProgress = (progress: boolean, userId: number): SetFollowingInProgress => ({
    type: "SET_FOLLOWING_IN_PROGRESS",
    progress,
    userId
})


export const getUsersThunk = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setPreloader(true))
    dispatch(setCurrentPage(currentPage))
    userAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.data.items))
            dispatch(setTotalUserCount(data.data.totalCount))
            dispatch(setPreloader(false))
        })
}
export const followThunk = (userId: number, subscribe: boolean) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    {
        subscribe
            ? userAPI.follow(userId)
                .then(res => {
                    if (res.data.resultCode === 0) {
                        dispatch(unfollow(userId))
                    }
                })
            : userAPI.unfollow(userId)
                .then(res => {
                    if (res.data.resultCode === 0) {
                        dispatch(follow(userId))
                    }
                })
    }
    dispatch(setFollowingInProgress(false, userId))
}
