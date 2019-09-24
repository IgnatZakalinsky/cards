import * as axios from "axios";


const instance = axios.create({
	baseURL: 'http://localhost:3005/cards'
});

export const editCardApi = { // отправляем на сервер запрос
	addCardToServer(card) {
		return instance.post(`/`,card)
	}
}




