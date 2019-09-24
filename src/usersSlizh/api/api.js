import * as axios from "axios";


const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const userAPI = {
	signup(login, password) {
		return instance.post(`users/`, {
			"login": login, "pass": password, "admin": false, "deck": [
				{"deckId": 1, "ratings": [{"id": 1, "checks": 5, "rating": 4.5}]}
			]
		})
	}
}