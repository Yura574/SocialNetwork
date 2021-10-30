import {ActionType, AddPostAC_Type, OnChangePostTextAC_Type, PostElementType, ProfilePage} from "./state";

const ADD_POST = "ADD_POST"
const ON_CHANGE_POST_TEXT = "ON_CHANGE_POST_TEXT"

export const profile_reducer = (state: ProfilePage, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const post: PostElementType = {
                id: 2,
                message: state.newPost,
                like: 0
            }
            state.postData.push(post)
            state.newPost = ''
            return state

        case  ON_CHANGE_POST_TEXT:
            state.newPost = action.newPostText
            return state
        default:
            return state
    }}

    export const addPostAC = (): AddPostAC_Type => ({
        type: ADD_POST
    })

    export const onChangePostTextAC = (newPostText: string): OnChangePostTextAC_Type => ({
        type: ON_CHANGE_POST_TEXT,
        newPostText: newPostText
    })