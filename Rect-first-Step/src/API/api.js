import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "aa8cece5-4db3-4400-be6b-bb26b1abbf16"},

});


export const UserAPI = {
    getUsersFromServer: (currentPage = 1, pageSize = 8) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getProfile: (userId) => {
        return ProfileAPI.getProfile(userId);
    },

    setFollow: (user) => {
        return instance.post(`follow/${user}`)
            .then(response => response.data);
    },

    setUnFollow: (user) => {
        return instance.delete(`follow/${user}`)
            .then(response => response.data);
    },

};

export const ProfileAPI = {

    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
        ;
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus: (status) => {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto: (photoFile) => {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfileOnServer: (profile) => {
        return instance.put(`profile/`, profile)
    }


};

export const AuthApi = {
    myAuth: () => {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    },
};
