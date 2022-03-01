export  type AddPostACType = {
    type: "ADD_POST"
}
export  type UpdateNewPostTextACType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export type ActionType = AddPostACType | UpdateNewPostTextACType


type InitialStateType = {
    postData: Array<PostElementType>
    newPostText: string
}
export type PostElementType = {
    id: number,
    message: string,
    like: number
}

const initialState: InitialStateType = {

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
    }
    return state
}

export const addPostAC = (): AddPostACType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})