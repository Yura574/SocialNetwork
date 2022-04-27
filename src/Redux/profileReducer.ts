import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {setPreloader} from "./userReducer";

export  type AddPostACType = {
    type: "ADD_POST"
    postText: string
}
export  type UpdateNewPostTextACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
export type AddProfileACType = {
    type: 'ADD_PROFILE'
    profile: ProfileType
}
export type setStatusACType = ReturnType<typeof setStatus>

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const ADD_PROFILE = 'ADD_PROFILE'

export type ActionType =
    AddPostACType
    | UpdateNewPostTextACType
    | AddProfileACType
    | setStatusACType

export type ContactProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactProfileType
    photos: {
        large: string
        small: string
    }
}

type InitialStateType = {
    postData: Array<PostElementType>
    newPostText: string
    profile: ProfileType | null
    status: string
}
export type PostElementType = {
    id: number,
    message: string,
    like: number
}

const initialState: InitialStateType = {
    profile: null,
    status: 'enter status',
    postData: [
        {id: 1, message: 'My first post', like: 15},
        {id: 2, message: 'My second post', like: 20}
    ],
    newPostText: 'as'
}

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    debugger
    switch (action.type) {
        case ADD_POST:
            const post: PostElementType = {
                id: 5,
                message: action.postText,
                like: 0
            }
            return {
                ...state,
                postData: [post, ...state.postData],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state, status: action.status
            }

        default:
            return state
    }


}
export const addPostAC = (postText: string): AddPostACType => ({type: ADD_POST, postText})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const addProfile = (profile: ProfileType): AddProfileACType => ({
    type: ADD_PROFILE,
    profile
})
export const setStatus = (status: string) => ({
    type: "SET_STATUS",
    status
} as const)


export const setProfile = (userId: string) => (dispatch: Dispatch) => {
    debugger

    dispatch(setPreloader(true))
    profileAPI.getCurrentUser(userId)
        .then(response => {
            debugger
            dispatch(addProfile(response.data))
            dispatch(setPreloader(false))
        })
}
// export const getStatus = (userId: number) => (dispatch: Dispatch) => {
//     debugger
//     profileAPI.getStatus(userId)
//         .then(res => {
//             debugger
//         })
// }
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    debugger

    dispatch(setPreloader(true))
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))

            dispatch(setPreloader(false))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    debugger
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}





















