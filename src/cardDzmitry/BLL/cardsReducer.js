let SET_USER_ID_SUCCESS = 'SN/CARDS_REDUCER_SET_USER_ID';
let SET_DECK_ID__SUCCESS = 'SN/CARDS_REDUCER_SET_DECK_ID';


let initialstate = {
    userId: null,
    deckId: null,


};


const cadrsReducer = (state = initialstate, action) => {


    switch (action.type) {
        case SET_USER_ID_SUCCESS:
            return {
                ...state, userId: action.userId
            };

        case SET_DECK_ID__SUCCESS:
            return {
                ...state, deckId: action.deckId
            };


        default:
            return state;
    }

};


export const setUserIdSuccess = (userId) => ({
    type:SET_USER_ID_SUCCESS, userId
});


export const setDeckIdSuccess = (deckId) => ({
    type:SET_DECK_ID__SUCCESS, deckId
});


export default cadrsReducer