import * as axios from "axios";


const instance = axios.create({
	baseURL: 'http://localhost:3005/cards'
});

//    instance.post(http://localhost:3005/cards, {
//    deckId: 1, question: "question", answer: "answer"
//    })
//

export const addCardAPI = {
	addCardToServer(card) {
		return instance.post(`/`,card)
	}
}


//     instance.post(http://localhost:3005/cards, {
//     deckId: 1, question: "question", answer: "answer"
//     })

// по нажатию на кнопку addCard отправлять на сервер
// instance.post(http://localhost:3005/cards, {
// deckId: 1, question: "question", answer: "answer"
// })