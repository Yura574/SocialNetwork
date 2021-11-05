export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photo: string
    follow: boolean
    status: string
    location: LocationType
    name: string

}
export type UsersPageType = {
    users: Array<UserType>
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
export type ActionUserType = FollowAC_type | UnFollowAC_type | SetUsersAC_type

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"


const initialState: UsersPageType = {
    users: [
        {id: 1, name: 'Yura', photo: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
            follow: true, status: 'I am student', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, name:'Alenka',  photo: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
            follow: true, status: 'I am student', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, name:'Marina',  photo: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
            follow: true, status: 'I am student', location: {city: 'Minsk', country: 'Belarus'}},
    ]
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

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
})