import {authMeThunkCreator} from "./auth_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

type AppReducerType = {
    initialized: boolean
}

type setInitializedAC_Type = {
    type: 'SET_INITIALIZED'

}

type ActionTypes = setInitializedAC_Type

const initialState: AppReducerType = {
    initialized: false
}

export const app_reducer = (state: AppReducerType = initialState, action: ActionTypes): AppReducerType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
export const setInitialized = (): setInitializedAC_Type => ({
    type: SET_INITIALIZED
})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMeThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}

