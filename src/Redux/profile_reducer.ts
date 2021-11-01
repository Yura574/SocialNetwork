import {ActionTypes, AddPostAC_Type, OnChangePostText_Type, PostElementType, ProfilePage} from "./state";

const ADD_POST = 'ADD_POST'
const ON_CHANGE_POST_TEXT = 'ON_CHANGE_POST_TEXT'
const initialState: ProfilePage = {
           postData: [
            {id: 1, message: 'My first post', like: 15},
            {id: 1, message: 'My second post', like: 20}
        ],
        newPost: 'aaa'
    }

export const profile_reducer = (state: ProfilePage = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const post: PostElementType = {
                id: 10,
                message: state.newPost,
                like: 0
            }
            state.postData.unshift(post)
            state.newPost = ''
            return state
        case ON_CHANGE_POST_TEXT:
            state.newPost = action.newPostText
            return state
        default:
            return state
    }
}
export const addPostAC = (): AddPostAC_Type => ({
    type: ADD_POST
})

export const onChangePostTextAC = (postText: string): OnChangePostText_Type => ({
    type: ON_CHANGE_POST_TEXT,
    newPostText: postText
})
