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
}

type ActionType = followTypeACType | unfollowTypeACType | setUsersTypeACType | setTotalUserCountACType | setCurrentPageACType


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

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState: InitialStateType = {
    users: [],
    totalUserCount: 0,
    pageSize: 100,
    currentPage: 3
}
export const userReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {

                    if (user.id === action.userID) {
                        user.followed = false
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {

                    if (user.id === action.userID) {
                        user.followed = true
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUserCount: action.totalUserCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
    }
    return state
}

export const followAC = (userID: number): followTypeACType => ({
    type: FOLLOW,
    userID
})
export const unfollowAC = (userID: number): unfollowTypeACType => ({
    type: UNFOLLOW,
    userID
})
export const setUsersAC = (users: Array<UserType>): setUsersTypeACType => ({
    type: SET_USERS,
    users
})
export const setTotalUserCountAC = (totalUserCount: number): setTotalUserCountACType => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount
})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})