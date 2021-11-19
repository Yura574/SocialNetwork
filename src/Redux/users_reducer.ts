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
    isFetching: boolean
    followingInProgress: Array<number | null>
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
export type SetToggleIsFetchingAC_type = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

export type SetFollowingInProgressAC_type = {
    type: "FOLLOWING_IS_PROGRESS"
    isFetching: boolean
    userId: number
}


export type ActionUserType = FollowAC_type |
    UnFollowAC_type |
    SetUsersAC_type |
    SetCurrentPageAC_type |
    SetTotalUsersCountAC_type |
    SetToggleIsFetchingAC_type |
    SetFollowingInProgressAC_type

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const FOLLOWING_IS_PROGRESS = "FOLLOWING_IS_PROGRESS"


const initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

export const users_reducer = (state: UsersPageType = initialState, action: ActionUserType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case "FOLLOWING_IS_PROGRESS" :
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export const follow = (userId: number) => ({
    type: FOLLOW,
    userId
})
export const unFollow = (userId: number) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalCount: number) => ({
    type: TOTAL_USERS_COUNT,
    totalCount
})
export const setToggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: FOLLOWING_IS_PROGRESS,
    isFetching,
    userId
})