import axios from "axios";
import {DataLoginType} from "../Redux/authReducer";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "83eb14c5-27df-4d8f-b745-d61831d51bfa"
    }
})


export const userAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

}
export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe?: boolean, captcha?: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('/auth/login')
    }
}

export const profileAPI = {
    getCurrentUser(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string){
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put( `/profile/status`, {status})
    }
}