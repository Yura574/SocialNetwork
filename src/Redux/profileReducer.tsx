import {ActionType, PostElementType} from "./state";

export  type AddPostACType = {
    type: "ADD_POST"
}
export  type UpdateNewPostTextACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

type InitialStateType = {
    postData: Array<PostElementType>
    newPostText: string
}

const initialState: InitialStateType = {

    postData: [
        {id: 1, message: 'My first post', like: 15},
        {id: 1, message: 'My second post', like: 20}
    ],
    newPostText: 'as'
}

export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const text: PostElementType = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.postData.unshift(text)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
    }
    return state
}

export const addPostAC = (): AddPostACType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})