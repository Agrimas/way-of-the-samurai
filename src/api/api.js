import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '4e70ea14-87f8-403e-9a3c-6012dce2b89c'},
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
    login(email, password, remember = false, captcha) {
        return instance.post('auth/login', {email, password, remember, captcha}).then(response => response.data);
    },
    logOut() {
        return instance.delete('auth/login');
    }
}

export const ProfileAPI = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, status)
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => response.data)
    },
    saveProfileInfo(profileInfo) {
        return instance.put(`profile`, profileInfo).then(response => response.data);
    },

}

export const SecurityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data.url);
    },
}