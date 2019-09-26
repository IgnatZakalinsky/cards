import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/users'
});

export const profileAPI = { 
	getUserFromServer(userId) {
		return instance.get(`/${userId}`) 
    },
    deleteUserFromServer(userId){
        return instance.delete(`/${userId}`)
    }
}
