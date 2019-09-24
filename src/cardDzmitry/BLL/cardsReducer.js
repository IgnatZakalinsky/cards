import {cardAPI} from "../DAL/cardAPI";
import {randomNumber} from "./utilities/randomNumber";

let SET_USER_ID_SUCCESS = 'SN/CARDS_REDUCER_SET_USER_ID';
let SET_DECK_ID__SUCCESS = 'SN/CARDS_REDUCER_SET_DECK_ID';
let SET_USER_DATA_SUCCESS = 'SN/CARDS_REDUCER_SET_USER_DATA';
let SET_CARDS_SUCCESS = 'SN/CARDS_REDUCER_SET_CARDS';
let TOGGLE_CHECKED = 'SN/CARDS_REDUCER_TOGGLE_CHECKED';
let SET_CARD_NUMBER_SUCCESS = 'SN?CARDS_REDUCER_SET_CARD_NUMBER_SUCCESS';
let GET_RANDOM_CARD = 'SN/CARD_REDUCER_GET_RANDOM_CARD';


let initialstate = {
    userId: 1,
    deckId: 1,
    userData: null,
    cards: [],
    checked: false,
    cardNumber: null,


};


const cadrsReducer = (state = initialstate, action) => {


    switch (action.type) {
        case SET_USER_ID_SUCCESS:
        case SET_DECK_ID__SUCCESS:
        case SET_USER_DATA_SUCCESS:
        case SET_CARDS_SUCCESS:

            return {
                ...state, ...action.payload
            };

        case TOGGLE_CHECKED:
            return {
                ...state, checked: action.toggleChecked
            };

        case SET_CARD_NUMBER_SUCCESS:
            return {
                ...state, cardNumber: action.number
            };



        default:
            return state;
    }

};


export const setUserIdSuccess = (userId) => ({
    type: SET_USER_ID_SUCCESS, payload: {userId}
});

export const setDeckIdSuccess = (deckId) => ({
    type: SET_DECK_ID__SUCCESS, payload: {deckId}
});

export const setUserDataSuccess = (userData) => ({
    type: SET_USER_DATA_SUCCESS, payload: {userData}
});

export const setCardsSuccess = (cards) => ({
    type: SET_CARDS_SUCCESS, payload: {cards}
});

export const toggleChecked = (toggleChecked) => ({
    type: TOGGLE_CHECKED, toggleChecked
});

export const setRandomCardNumber = (number) => ({
    type: SET_CARD_NUMBER_SUCCESS, number
});


export const getRandomCard = () => ({
    type:GET_RANDOM_CARD
});


export const getUser = (userId) => async (dispatch, getState) => {
    // let userId = getState().cards.userId;
    try {
        let userData = await cardAPI.getUser(userId);
        dispatch(setUserDataSuccess(userData))
    } catch (e) {
        console.log(e)
    }

};

export const getCards = (deckId) => async (dispatch, getState) => {
    // let deckId = getState().cards.deckId;
    try {
        let cards = await cardAPI.getCards(deckId);
        let number = randomNumber(1, cards.length);
        console.log(number);
        let randomCard = cards.filter(c => c.id === number);
        console.log(randomCard);
        dispatch(setRandomCardNumber(number));
        dispatch(setCardsSuccess(randomCard));

    } catch (e) {
        console.log(e)
    }
};


export default cadrsReducer