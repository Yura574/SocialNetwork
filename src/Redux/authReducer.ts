import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type SetAuthDataUserACType = {
    type: 'SET_AUTH_DATA_USER',
    data: AuthDataType
}
type SetIsAuthACType = {
    type: "SET_IS_AUTH"
    resultCode: 0 | 1
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
                isAuth: action.resultCode === 0
            }
        default:
            return state
    }
}


export const setAuthDataUser = (data: AuthDataType): SetAuthDataUserACType => ({
    type: "SET_AUTH_DATA_USER",
    data
})
export const setResultCode = (resultCode: 0 | 1) : SetIsAuthACType => ({
    type: "SET_IS_AUTH",
    resultCode
})

export const authMe =() => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(res => {
            dispatch(setAuthDataUser(res.data.data))
            dispatch(setResultCode(res.data.resultCode))

        })
}
