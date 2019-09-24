import {checkDeckAPI} from "../DAL/checkDeckAPI";

export const getObjectsThunk = () => async (dispatch, getState) => {
    const res = await checkDeckAPI.objectsFromServer();
    // dispatch(setSuccess(true));
    // dispatch(putQuestionSuccess(res.question));
    console.log('objects:', res)
}
