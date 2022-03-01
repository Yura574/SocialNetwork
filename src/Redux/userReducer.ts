export type UserType = {
    id: number
    avatar: string
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
type InitialStateType = {
    users: Array<UserType>
}

type ActionType = followTypeAC | unfollowTypeAC | setUsersTypeAC


type followTypeAC = {
    type: 'FOLLOW'
    userID: number
}
type unfollowTypeAC = {
    type: 'UNFOLLOW'
    userID: number
}
type setUsersTypeAC = {
    type: 'SET_USERS'
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState: InitialStateType = {
    users: []
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
            const users = action.users
            return {
                ...state, users: [ ...users]
    }

    }
    return state
}

export const followAC = (userID: number): followTypeAC => ({
    type: FOLLOW,
    userID: userID
})
export const unfollowAC = (userID: number): unfollowTypeAC => ({
    type: UNFOLLOW,
    userID: userID
})
export const setUsersAC = (users: Array<UserType>): setUsersTypeAC => ({
    type: SET_USERS,
    users: users
})
