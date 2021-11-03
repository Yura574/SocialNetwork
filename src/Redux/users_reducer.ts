type LocationType = {
    city: string
    country: string
}
type UserType = {
    id: number
    photo: string
    follow: boolean
    status: string
    location: LocationType
}
export type UsersPage = {
    users: Array<UserType>
}

type FollowAC_type = {
    type: "FOLLOW",
    userId: number
}
type UnFollowAC_type = {
    type: "UNFOLLOW",
    userId: number
}
type SetUsersAC_type = {
    type: "SET_USERS"
    users: Array<UserType>
}
type ActionUserType = FollowAC_type | UnFollowAC_type | SetUsersAC_type

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


const initialState: UsersPage = {
    users: [
        {id: 1, photo: '', follow: true, status: 'I am student', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photo: '', follow: true, status: 'I am student', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, photo: '', follow: true, status: 'I am student', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

export const users_reducer = (state: UsersPage = initialState, action: ActionUserType): UsersPage => {
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
                ...state,
                users: [...action.users, ...action.users]
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

export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
})