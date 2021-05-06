import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '1ff6f51d-e642-44e0-a765-1ec1a2baad4a'},
});

export const UsersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data.resultCode);
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode);
    }
}

export const AuthAPI = {
    auth() {
        return instance.get('auth/me/').then(response => response.data);
    },
}

export const ProfileAPI = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    }
}