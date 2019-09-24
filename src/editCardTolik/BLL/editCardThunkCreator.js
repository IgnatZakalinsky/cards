import {editCardApi} from "../DAL/editCardApi";
import {setCardSuccess, setSuccess} from "./editCardReducer";

export const addCardThunk = () => async (dispatch, getState) => {
    const res = await editCardApi.addCardToServer({
        deckId: getState().addCard.cards.deckId,
        question: getState().addCard.cards.question,
        answer: getState().addCard.cards.answer,
        imgURL: getState().addCard.cards.imgURL
    });
    dispatch(setSuccess(true));
    // dispatch(putQuestionSuccess(res.question));
    console.log('addCard:', res)
}

export const getCardThunk = () =>async (dispatch, getState) =>{
    const res = await editCardApi.getCardToServer(
        getState().editCard.cards.cardId
    )
    dispatch(setCardSuccess(res.data))
    console.log('editCard:', res)
}

export const putCardThunk = () =>async (dispatch, getState) =>{
    const res = await editCardApi.putCardToServer({
            deckId: getState().addCard.cards.deckId,
            question: getState().addCard.cards.question,
            answer: getState().addCard.cards.answer,
            imgURL: getState().addCard.cards.imgURL,
            id: getState().addCard.cards.id
        },getState().addCard.cards.id
    )
    dispatch(setSuccess(true));
    console.log('editCard:', res)
}



// export const updateCar = (id, newCar) => async (dispatch) =>{
//     const res = await carAPI.updateCar(id, newCar);
//     dispatch(updateCarSuccess(newCar));
// }
//
// export const deleteCar = (id) => async (dispatch) =>{
//     await carAPI.deleteCar(id);
//     dispatch(deleteCarSuccess(id));
// }
//
// export const addNewCar = (clientId, car) => async (dispatch) =>{
//     let {make='new car',model='new model',year=2019,vin=77777}=car
//     let newCar={clientId, make, model, year, vin}
//
//     let resp= await carAPI.addCar(newCar);
//     dispatch(addCarSuccess(resp.data));
// }