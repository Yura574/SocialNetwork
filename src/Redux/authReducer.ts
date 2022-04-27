import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type SetAuthDataUserACType = {
    type: 'SET_AUTH_DATA_USER',
    data: AuthDataType
}
type SetIsAuthACType = {
    type: "SET_IS_AUTH"
    isAuth: boolean
}

type ActionType = SetAuthDataUserACType | SetIsAuthACType
export type AuthDataType = {
    id: number | null
    login: string | null
    email: string | null
}

type InitialStateType = {
    isAuth: boolean
    data: AuthDataType

}
export type DataLoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}
const initialState: InitialStateType = {
    isAuth: false,
    data: {
        id: null,
        login: null,
        email: null
    },

}

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_AUTH_DATA_USER":
            return {
                ...state,
                data: action.data
            }
        case "SET_IS_AUTH" :
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}


export const setAuthDataUser = (data: AuthDataType): SetAuthDataUserACType => ({
    type: "SET_AUTH_DATA_USER",
    data
})
export const setIsAuth = (isAuth: boolean): SetIsAuthACType => ({
    type: "SET_IS_AUTH",
    isAuth
})

export const authMe = () => (dispatch: Dispatch) => {
    debugger
    authAPI.authMe()
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setAuthDataUser(res.data.data))
                dispatch(setIsAuth(true))
            }


        })
}

export const loginTC = (email: string, password: string, rememberMe?: boolean, captcha?: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setIsAuth(true))
            }


        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            debugger
            if(res.data.resultCode === 0){
                dispatch(setIsAuth(false))
            }


        })
}
