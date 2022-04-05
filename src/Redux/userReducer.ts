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
}

type ActionType =
    followTypeACType
    | unfollowTypeACType
    | setUsersTypeACType
    | setTotalUserCountACType
    | setCurrentPageACType
    | setPreloaderACType


type followTypeACType = {
    type: 'FOLLOW'
    userID: number
}
type unfollowTypeACType = {
    type: 'UNFOLLOW'
    userID: number
}
type setUsersTypeACType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
type setTotalUserCountACType = {
    type: 'SET_TOTAL_USER_COUNT',
    totalUserCount: number
}
type setCurrentPageACType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type setPreloaderACType = {
    type: 'SET_PRELOADER'
    turnOnOff: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PRELOADER = 'SET_PRELOADER'

const initialState: InitialStateType = {
    users: [],
    totalUserCount: 0,
    pageSize: 100,
    currentPage: 1,
    preloader: false
}
export const userReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID? {...user, followed: false} :{...user} )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID? {...user, followed: true} :{...user} )
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
    }
    return state
}

export const follow = (userID: number): followTypeACType => ({
    type: FOLLOW,
    userID
})
export const unfollow = (userID: number): unfollowTypeACType => ({
    type: UNFOLLOW,
    userID
})
export const setUsers = (users: Array<UserType>): setUsersTypeACType => ({
    type: SET_USERS,
    users
})
export const setTotalUserCount = (totalUserCount: number): setTotalUserCountACType => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount
})
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setPreloader = (turnOnOff: boolean): setPreloaderACType => ({
    type: SET_PRELOADER,
    turnOnOff
})