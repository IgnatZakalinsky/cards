import * as axios from "axios";


const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const userAPI = {
	getUsers() {
		return instance.get(`users/`)
	},
	deleteUser(id){
		return instance.delete(`users/${id}`)
	}
}