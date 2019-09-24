const PUT_ID = 'PUT_ID'
const PUT_DECK = 'PUT_DECK'

const PUT_QUESTION = 'PUT_QUESTION'
const PUT_ANSWER = 'PUT_ANSWER'

const SET_SUCCESS = 'SET_SUCCESS'

const CLEAR_FOR_NEW = 'CLEAR_FOR_NEW'

const SAVE_URL = 'SAVE_URL'


const initialState = {
    cards: {
        id: 1,
        deckId: 1,
        imgURL: "data:image/jpeg;base64,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",
        question: "",
        answer: "",
        success: false
    }
}


const addCardReducer = (state = initialState, action) => {
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
                cards: {...state.cards, imgURL: action.imgURL }

            };



        default:
            return state
    }
}

// export const setUsersSuccess = (id,deckId) => ({type: SET_USER, id,deckId})
export const putIdSuccess = (id) => ({type: PUT_ID, id})
export const putDeckSuccess = (deckId) => ({type: PUT_DECK, deckId})


export const putQuestionSuccess = (question) => ({type: PUT_QUESTION, question})
export const putAnswerSuccess = (answer) => ({type: PUT_ANSWER, answer})

export const setSuccess = (success) => ({type: SET_SUCCESS, success})

export const clearSuccess = () => ({type: CLEAR_FOR_NEW})

export const saveUrlSuccess = (imgURL) => ({type: SAVE_URL,imgURL})


export default addCardReducer