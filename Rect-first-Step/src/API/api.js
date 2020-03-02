import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "247a82ba-5e46-4e1e-be71-9731010d7480"},

});


export const UserAPI = {
    getUsers: (currentPage= 1, pageSize=8) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },

    setFollow: (user) => {
        return instance.delete(`follow/${user}`)
            .then(response => response.data);
    },

    setUnFollow: (user) => {
        return instance.delete(`follow/${user}`)
            .then(response => response.data);
    },

};

export const AuthApi = {
    myAuth: () => {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
};
