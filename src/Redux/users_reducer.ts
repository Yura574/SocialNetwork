export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    status: string
    location: LocationType


}
export type UsersPageType = {
    users: Array<UserType>
    pageCount: number
    currentPage: number
    allPage: number
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
    page: number
}
export type SetAllPageAC_type = {
    type: "SET_ALL_PAGE"
    page: number
}
export type ActionUserType = FollowAC_type | UnFollowAC_type | SetUsersAC_type | SetCurrentPageAC_type | SetAllPageAC_type

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_ALL_PAGE = "SET_ALL_PAGE"


const initialState: UsersPageType = {
    users: [],
    pageCount: 5,
    currentPage: 0,
    allPage: 0
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
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return  {
                ...state, currentPage: action.page
            }

        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW,
    userId: userId
})
export const unFollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId: userId
})
export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
})
export const setCurrentPageAC = (page: number) => ({
    type: SET_CURRENT_PAGE,
    page: page
})
export const setAllPageAC = (page: number) => ({
    type: SET_ALL_PAGE,
    page: page
})