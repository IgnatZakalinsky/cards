import {cardAPI} from "../DAL/cardAPI";

let SET_USER_ID_SUCCESS = 'SN/CARDS_REDUCER_SET_USER_ID';
let SET_DECK_ID__SUCCESS = 'SN/CARDS_REDUCER_SET_DECK_ID';
let SET_USER_DATA_SUCCESS = 'SN/CARDS_REDUCER_SET_USER_DATA';
let SET_CARDS_SUCCESS = 'SN/CARDS_REDUCER_SET_CARDS';
let TOGGLE_CHECKED = 'SN/CARDS_REDUCER_TOGGLE_CHECKED';



let initialstate = {
    userId: null,
    deckId: null,
    userData:null,
    cards:[],
    checked:false,


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
                ...state, checked: true
            };


        default:
            return state;
    }

};


export const setUserIdSuccess = (userId) => ({
    type: SET_USER_ID_SUCCESS, payload: userId
});


export const setDeckIdSuccess = (deckId) => ({
    type: SET_DECK_ID__SUCCESS, payload: deckId
});

export const setUserDataSuccess = (userData) => ({
    type: SET_USER_DATA_SUCCESS, payload:userData
});

export const setCardsSuccess = (cards) => ({
    type: SET_CARDS_SUCCESS, payload: cards
});

export const toggleChecked = () => ({
    type:TOGGLE_CHECKED
});


export const getUser = (userId) => async (dispatch, getState) => {
    // let userId = getState().cards.userId;
    try {
        let userData = await cardAPI.getUser(userId);
        dispatch(setUserDataSuccess(userData))
    }
    catch (e) {
        console.log(e)
    }

};

export const getCards = (deckId) => async (dispatch, getState) => {
    // let deckId = getState().cards.deckId;
    try{
        let cards = await cardAPI.getCards(deckId);
        dispatch(setCardsSuccess(cards))
    }
    catch (e) {
        console.log(e)
    }
};


export default cadrsReducer