export  type AddPostACType = {
    type: "ADD_POST"
}
export  type UpdateNewPostTextACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
export type AddProfileACType = {
    type: 'ADD_PROFILE'
    profile: ProfileType
}

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const ADD_PROFILE = 'ADD_PROFILE'

export type ActionType = AddPostACType | UpdateNewPostTextACType | AddProfileACType

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
}
export type PostElementType = {
    id: number,
    message: string,
    like: number
}

const initialState: InitialStateType = {
    profile: null,
    postData: [
        {id: 1, message: 'My first post', like: 15},
        {id: 2, message: 'My second post', like: 20}
    ],
    newPostText: 'as'
}

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const post: PostElementType = {
                id: 5,
                message: state.newPostText,
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
        default:
            return state
    }


}
export const addPostAC = (): AddPostACType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const addProfile = (profile: ProfileType): AddProfileACType => ({
    type: ADD_PROFILE,
    profile
})