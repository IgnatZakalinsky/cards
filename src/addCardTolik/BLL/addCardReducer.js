const PUT_ID = 'PUT_ID'
const PUT_DECK = 'PUT_DECK'

const PUT_QUESTION = 'PUT_QUESTION'
const PUT_ANSWER = 'PUT_ANSWER'

const SET_SUCCESS = 'SET_SUCCESS'

const CLEAR_FOR_NEW = 'CLEAR_FOR_NEW'



const initialState = {
    cards: {
        id: 1,
        deckId: 1,
        // imgURL: "https://page.com",
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
                cards: {...state.cards,answer: '', question: ''}

            };

        // case EDIT_ORDER:
        //     return {
        //         ...state,
        //         orders: state.orders.map(o => {
        //             if (o.id === action.newOrder.id) return action.newOrder
        //             return o
        //         })
        //     };
        // case SELECT_ORDER:
        //     return {
        //         ...state,
        //         orders: state.orders.map(o => {
        //             if (o.id === action.id) return {...o, status: action.newstatus}
        //             return o
        //         })
        //     };
        // case EDIT_MODE_ORDER:
        //     return {
        //
        //         ...state,
        //         orders: state.orders.map(o => {
        //             if (o.id === action.id) return {...o, editMode: true}
        //             return o
        //         })
        //     };
        //
        // case DELETE_ORDER:
        //     return {
        //         ...state,
        //         orders: state.orders.filter(o=>o.id !== action.id)
        //
        //     };

        default:
            return state
    }
}

 // export const setUsersSuccess = (id,deckId) => ({type: SET_USER, id,deckId})
export const putIdSuccess = (id) => ({type: PUT_ID, id})
 export const putDeckSuccess = (deckId) => ({type: PUT_DECK,deckId})


 export const putQuestionSuccess = (question) => ({type: PUT_QUESTION,question})
 export const putAnswerSuccess = (answer) => ({type: PUT_ANSWER,answer})

 export const setSuccess = (success) => ({type: SET_SUCCESS,success})

 export const clearSuccess = () => ({type: CLEAR_FOR_NEW})



export default addCardReducer