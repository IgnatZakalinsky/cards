import * as axios from "axios";


const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const userAPI = {
	getUser(id) {
		return instance.get(`users/${id}`)
	}
}