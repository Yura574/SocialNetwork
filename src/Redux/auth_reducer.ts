import {Dispatch} from "redux";
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

export type DataAuthMeType = {
    userId: number
    email: string
    login: string
}
export type AuthMeType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'


type setUserAuthDataAC_Type = {
    type: 'SET_USER_AUTH_DATA'
    // userId: string | null
    // email: string | null
    // login: string | null
    data: { userId: string | null, email: string | null, login: string | null, isAuth: boolean }
    // isAuth: boolean
}

type ActionTypes = setUserAuthDataAC_Type

const initialState: AuthMeType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const auth_reducer = (state: AuthMeType = initialState, action: ActionTypes): AuthMeType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,

            }

        default:
            return state
    }
}
export const setUserAuthData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean): setUserAuthDataAC_Type => ({
    type: SET_USER_AUTH_DATA,
    data: {userId, email, login, isAuth},
    // isAuth
})

export const authMeThunkCreator = () => (dispatch: Dispatch) => {
    return authAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setUserAuthData(id, email, login, true))
        }
    })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authMeThunkCreator())
        } else {
            dispatch(stopSubmit('login', {_error: response.data.messages}))
        }
    })
}
export const logoutThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false))
        }
    })
}