import {addPostAC, deletePostAC, profile_reducer, ProfilePage} from "./profile_reducer";




const state: ProfilePage = {
    postData: [
        {id: 1, message: 'My first post', like: 15},
        {id: 2, message: 'My second post', like: 20}
    ],
    profile: null,
    status: ''
}

test('new post should be added', () => {
    let action = addPostAC('it-kamasutra')
    let newState = profile_reducer(state, action)
    expect(newState.postData.length).toBe(3)
})

test('message should be correct', () => {
    let action = addPostAC('new post')
    let newState = profile_reducer(state, action)
    expect(newState.postData[0].message).toBe('new post')
})

test('length after delete should decrement', () => {
    let action = deletePostAC(1)
    let newState = profile_reducer(state, action)
    expect(newState.postData.length).toBe(1)
})
