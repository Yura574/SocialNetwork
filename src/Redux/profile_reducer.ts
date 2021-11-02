
export type PostElementType = {
    id: number,
    message: string,
    like: number
}
export type ProfilePage = {
    postData: Array<PostElementType>
    newPost: string
}

type AddPostAC_Type = {
    type: 'ADD_POST'
}
type OnChangePostText_Type = {
    type: 'ON_CHANGE_POST_TEXT'
    newPostText: string
}

const ADD_POST = 'ADD_POST'
const ON_CHANGE_POST_TEXT = 'ON_CHANGE_POST_TEXT'
const initialState: ProfilePage = {
           postData: [
            {id: 1, message: 'My first post', like: 15},
            {id: 1, message: 'My second post', like: 20}
        ],
        newPost: 'aaa'
    }

export const profile_reducer = (state: ProfilePage = initialState, action: AddPostAC_Type | OnChangePostText_Type): ProfilePage => {
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
