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
       return  instance.get('auth/me')
    }
}

export const profileAPI = {
    setPage(userId: string) {
        return  instance.get('profile/' + userId)
    }
}

export const followAPI = {
    followUser(id: number) {
       return  instance.post(`follow/${id}`)
    },
    unfollowUser(id: number) {
       return  instance.delete(`follow/${id}`)
    }
}


