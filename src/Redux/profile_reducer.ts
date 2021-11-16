import {ProfileUserType} from "../Components/Main/Profile/ProfileContainer";

export type PostElementType = {
    id: number,
    message: string,
    like: number
}
export type ProfilePage = {
    postData: Array<PostElementType>
    newPost: string
    profile: ProfileUserType | null
}

type AddPostAC_Type = {
    type: 'ADD_POST'
}
type OnChangePostTextAC_Type = {
    type: 'ON_CHANGE_POST_TEXT'
    newPostText: string
}
type setUserProfileAC_Type = {
    type: 'SET_USER_PROFILE'
    profile: ProfileUserType
}

const ADD_POST = 'ADD_POST'
const ON_CHANGE_POST_TEXT = 'ON_CHANGE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState: ProfilePage = {
    postData: [
        {id: 1, message: 'My first post', like: 15},
        {id: 1, message: 'My second post', like: 20}
    ],
    profile: null,
    newPost: 'aaa'
}

export const profile_reducer = (state: ProfilePage = initialState, action: AddPostAC_Type | OnChangePostTextAC_Type | setUserProfileAC_Type): ProfilePage => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPost: '',
                postData: [{id: 10, message: state.newPost, like: 0}, ...state.postData]
            }
        case ON_CHANGE_POST_TEXT:
            return {
                ...state,
                newPost: action.newPostText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}
export const addPostAC = (): AddPostAC_Type => ({
    type: ADD_POST
})

export const onChangePostTextAC = (postText: string): OnChangePostTextAC_Type => ({
    type: ON_CHANGE_POST_TEXT,
    newPostText: postText
})
export const setUserProfile = (profile: any): setUserProfileAC_Type => ({
    type: SET_USER_PROFILE,
    profile
})
