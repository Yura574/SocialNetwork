import axios from "axios";

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
    authMe() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    setPage(userId: string) {
        return instance.get(`profile/${userId}/`)
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})
    }
}

export const followAPI = {
    followUser(id: number) {
        return instance.post(`follow/${id}`)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    }
}


