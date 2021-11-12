export type LocationType = {
    city: string
    country: string
}
export type photosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean
    location: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export type FollowAC_type = {
    type: "FOLLOW",
    userId: number
}
export type UnFollowAC_type = {
    type: "UNFOLLOW",
    userId: number
}
export type SetUsersAC_type = {
    type: "SET_USERS"
    users: Array<UserType>
}
export type SetCurrentPageAC_type = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type SetTotalUsersCountAC_type = {
    type: "TOTAL_USERS_COUNT"
    totalCount: number
}

export type ActionUserType = FollowAC_type | UnFollowAC_type | SetUsersAC_type | SetCurrentPageAC_type | SetTotalUsersCountAC_type

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT"


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1

}

export const users_reducer = (state: UsersPageType = initialState, action: ActionUserType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.totalCount}

        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW,
    userId
})

export const unFollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
})
export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCountAC = (totalCount: number) => ({
    type: TOTAL_USERS_COUNT,
    totalCount
})