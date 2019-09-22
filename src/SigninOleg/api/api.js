import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https:// '
});

export const userAPI = {
    signin(userId) {
        return instance.post(`signin/${userId}`)
    }