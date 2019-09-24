const PUT_ID = 'PUT_ID'
const PUT_DECK = 'PUT_DECK'
const PUT_DECKID = 'PUT_DECKID'

const PUT_QUESTION = 'PUT_QUESTION'
const PUT_ANSWER = 'PUT_ANSWER'

const SET_SUCCESS = 'SET_SUCCESS'

const CLEAR_FOR_NEW = 'CLEAR_FOR_NEW'

const SAVE_URL = 'SAVE_URL'

const SAVE_CARD = 'SAVE_CARD'


const initialState = {
    cards: {
        id: 1,
        deckId: 1,
        cardId: 1,
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLk2ANlm7oK92j0-u3uOxzIrzaBz64jTcZ19s_T40hZYuKdvI",
        question: "",
        answer: "",
        success: false,

    }
}


const editCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_ID:
            return {
                ...state,
                cards: {...state.cards, id: action.id}
            }
        case PUT_DECK:
            return {
                ...state,
                cards: {...state.cards, deckId: action.deckId}

            };
        case PUT_DECKID:
            return {
                ...state,
                cards: {...state.cards, cardId: action.cardId}

            };
        case PUT_QUESTION:
            return {
                ...state,
                cards: {...state.cards, question: action.question, success: false}//success: false поменяли
                //для того чтобы занулить принажатии текст который выводится SUCCESS(не передаем в параметры ActionCreator

            };
        case PUT_ANSWER:
            return {
                ...state,
                cards: {...state.cards, answer: action.answer, success: false}

            };
        case SET_SUCCESS:
            return {
                ...state,
                cards: {...state.cards, success: action.success}

            };
        case CLEAR_FOR_NEW:
            return {
                ...state,
                cards: {...state.cards, answer: '', question: ''}

            };
        case SAVE_URL:
            return {
                ...state,
                cards: {...state.cards, imgURL: action.imgURL}

            };

        case SAVE_CARD:
            return {
                ...state,
                cards: {... action.cards, id: state.id, cardId: action.cards.id}

            };


        default:
            return state
    }
}

export const putIdSuccess = (id) => ({type: PUT_ID, id})
export const putDeckSuccess = (deckId) => ({type: PUT_DECK, deckId})
export const putCardIdSuccess = (cardId) => ({type: PUT_DECKID, cardId})


export const putQuestionSuccess = (question) => ({type: PUT_QUESTION, question})
export const putAnswerSuccess = (answer) => ({type: PUT_ANSWER, answer})

export const setSuccess = (success) => ({type: SET_SUCCESS, success})

export const clearSuccess = () => ({type: CLEAR_FOR_NEW})

export const saveUrlSuccess = (imgURL) => ({type: SAVE_URL, imgURL})

export const setCardSuccess = (cards) => ({type: SAVE_CARD, cards})


export default editCardReducer