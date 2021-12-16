import {ProfileUserType} from "../Components/Main/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../API/api";

    export type PostElementType = {
    id: number,
    message: string,
    like: number
}
export type ProfilePage = {
    postData: Array<PostElementType>
    profile: ProfileUserType | null
    status: string
}

type AddPostAC_Type = {
    type: 'ADD_POST'
    newPost: string
}
type setUserProfileAC_Type = {
    type: 'SET_USER_PROFILE'
    profile: ProfileUserType
}
type getStatusAC_Type = {
    type: 'GET_STATUS'
    status: string
}
type deletePostAC_Type = {
    type: 'DELETE_POST'
    id: number
}

type actionType = AddPostAC_Type | setUserProfileAC_Type | getStatusAC_Type | deletePostAC_Type

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_STATUS = 'GET_STATUS'
const DELETE_POST = 'DELETE_POST'

const initialState: ProfilePage = {
    postData: [
        {id: 1, message: 'My first post', like: 15},
        {id: 2, message: 'My second post', like: 20}
    ],
    profile: null,
    status: ''
}

export const profile_reducer = (state: ProfilePage = initialState, action: actionType): ProfilePage => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [{id: 10, message: action.newPost, like: 0}, ...state.postData]
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.id)
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}
export const addPostAC = (newPost: string): AddPostAC_Type => ({
    type: ADD_POST,
    newPost
})
export const deletePostAC = (id: number): deletePostAC_Type => ({
    type: DELETE_POST,
    id
})

export const setUserProfile = (profile: ProfileUserType): setUserProfileAC_Type => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status: string): getStatusAC_Type => ({
    type: GET_STATUS,
    status
})


export const setPageThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.setPage(userId)
       dispatch( setUserProfile(response.data))

}
export const getStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
       dispatch( setStatus(response.data))
}
export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
  let response = await  profileAPI.updateStatus(status)
       if (response.data.resultCode === 0 ){
           dispatch( setStatus(status))
       }

}