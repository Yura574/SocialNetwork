import axios from "axios";
import {ProfileUserType} from "../Components/Main/Profile/ProfileContainer";
import {DataAuthMeType} from "../Redux/auth_reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "83eb14c5-27df-4d8f-b745-d61831d51bfa"
    }
})

export const userAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    authMe(setUserAuthData: (data: DataAuthMeType) => void) {
        instance.get('auth/me').then(response => {
                if (response.data.resultCode === 0) {
                    setUserAuthData(response.data.data)
                }
            }
        )
    }
}

export const profileAPI = {
    setPage(userId: string, setUserProfile: (profile: ProfileUserType) => void) {
        instance.get(userId).then(response => {
            setUserProfile(response.data)
        })
    }
}

export const followAPI = {
    followUser(id: number, follow: (userId: number) => void, setFollowingInProgress: (isFetching: boolean, userId: number) => void) {
        instance.post(`follow/${id}`).then(response => {
            if (response.data.resultCode === 0) {
                follow(id)
            }
            setFollowingInProgress(false, id)
        })
    },
    unfollowUser(id: number, unFollow: (userId: number) => void, setFollowingInProgress: (isFetching: boolean, userId: number)=> void) {
        instance.delete(`follow/${id}`).then(response => {
            if (response.data.resultCode === 0) {
                unFollow(id)
            }
            setFollowingInProgress(false, id)
        })
    }
}


