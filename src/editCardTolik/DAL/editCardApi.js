import * as axios from "axios";


const instance = axios.create({
	baseURL: 'http://localhost:3005/cards'
});

export const editCardApi = { // отправляем на сервер запрос
	addCardToServer(card) {
		return instance.post(`/`,card)//когда делаем пост запрос на сервер, мы используем post(`/`,card)
	},
	getCardToServer(cardId) {
		return instance.get(`/${cardId}`) // когда делаем гет запрос на сервер, мы используем get(`/${cardId}`)
	},
	putCardToServer(card,id) {
		return instance.put(`/${id}`,card) // когда делаем путт запрос на сервер, мы используем get(`/${cardId}`)
	}
}





