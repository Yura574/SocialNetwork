import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "83eb14c5-27df-4d8f-b745-d61831d51bfa"
    }
})


export const userAPI =  {
    getUsers (pageSize: number, currentPage: number) {
       return  instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },
}
export const authAPI ={
    authMe(){
        return instance.get('auth/me')
    },
}

export const profileAPI = {
    getCurrentUser  (userId: string)  {
        return instance.get(`profile/${userId}`)
    },
}