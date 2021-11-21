import {Dispatch} from "redux";
import {authAPI} from "../API/api";

export type DataAuthMeType = {
    userId: number
    email: string
    login: string
}
export type AuthMeType = {
    data: DataAuthMeType | null
    isAuth: boolean
}

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'


type setUserAuthDataAC_Type = {
    type: 'SET_USER_AUTH_DATA'
    data: DataAuthMeType
}

type ActionTypes = setUserAuthDataAC_Type

const initialState: AuthMeType = {
    data: null,
    isAuth: false
}

export const auth_reducer = (state: AuthMeType = initialState, action:ActionTypes): AuthMeType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export const setUserAuthData = (data: DataAuthMeType): setUserAuthDataAC_Type => ({
    type: SET_USER_AUTH_DATA,
    data
})

export const authMeThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(response.data.data))
        }
    })
}