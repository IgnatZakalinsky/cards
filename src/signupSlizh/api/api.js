import * as axios from "axios";


const instance = axios.create({
	baseURL: 'https:// '
});

export const userAPI = {
	signup(userId) {
		return instance.post(`signup/${userId}`)
	}
}