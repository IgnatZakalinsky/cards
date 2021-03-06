import API from "../DAL/API";
import constantType from "./constantType";

const {SET_ID,SET_PATH_ID,SET_IS_ADMIN,SET_IS_STATUS,SET_IS_INPUT} = constantType;

export const statuses = {
    isSuccess: 'isSuccess',
    deckAdded: 'Deck added',
    deletedSuccessful: 'Deleted successful',
    error: 'error'
};

const initialState = {
    isAdmin: false,
    id: null,
    pathId: null,
    isInput: false,
    status: statuses.isSuccess
};

const createDeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ID:
        case SET_IS_ADMIN:
        case SET_IS_INPUT:
        case SET_PATH_ID:
        case SET_IS_STATUS: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
};

export const setId = (id) => ({type: SET_ID,payload:{id}});
export const setIsAdmin = (isAdmin) => ({type: SET_IS_ADMIN,payload:{isAdmin}});
export const setIsInput = (isInput) => ({type: SET_IS_INPUT,payload:{isInput}});
export const setPathId = (pathId) => ({type: SET_PATH_ID,payload:{pathId}});
export const setIsStatus = (status) => ({type: SET_IS_STATUS,payload:{status}});

export const setDeck = (folderId,name) => async (dispatch) => {
    try{
        let res = await API.createDeck(folderId,name);
        console.log(`CreateDeck: id: ${res.id}, folderId: ${res.folderId}, type: ${res.type}, name: ${res.name}`);
        if(res){
            dispatch(setIsStatus(statuses.deckAdded));
            dispatch(setPathId(res.id))
        } else {
            dispatch(setIsStatus(statuses.error));
        }
    }
    catch (e) {
        console.log(e.message);
        dispatch(setIsStatus(statuses.error));
    }
};

export const deleteDeck = () => async (dispatch,getState) => {
    let id = getState().createDeck.pathId;
    try{
        let res = await API.deleteDeck(id);
        console.log(`DeleteDeck: status: ${res.status}`);
        if(res.data){
            dispatch(setIsStatus(statuses.deletedSuccessful));
        } else {
            dispatch(setIsStatus(statuses.error));
        }
    }
    catch (e) {
        console.log(e.message);
        dispatch(setIsStatus(statuses.error));
    }
};

export default createDeckReducer;