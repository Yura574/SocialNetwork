import {StateType} from "./Redux-store";

export const getUsers =(state: StateType) => {
    return state.usersPage.users
}
export const getPageSize =(state: StateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount =(state: StateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage =(state: StateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching =(state: StateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress =(state: StateType) => {
    return state.usersPage.followingProgress
}