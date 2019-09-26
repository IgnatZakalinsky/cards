export const getUserId = (state) => {
    return state.cards.userId
};

export const getDeckId = (state) => {
    return state.cards.deckId
};

export const getUserDAta = (state) => {
    return state.cards.userData
};

export const getCardsData = (state) => {
    return state.cards.cards
};

export const getChecked = (state) => {
    return state.cards.checked
};

export const getRandomNumber = (state) => {
    return state.cards.cardNumber
}