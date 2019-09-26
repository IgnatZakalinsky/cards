// import {checkDeckAPI} from "../DAL/checkDeckAPI";

const CHECK_ID_USER = 'checkDeckReducer/CHECK_ID_USER';
const ID_STATUS = 'checkDeckReducer/TEXT_STATUS';
const SET_OBJECTS_SUCCESS = 'checkDeckReducer/SET_OBJECTS_SUCCESS';

let initState = {
    deck:{
        id: '',
        loginIn: 'admin',
        userId:'',
    }

};
const checkDeckReducer = (state = initState, action) => {
    switch (action.type) {
        case ID_STATUS:{
            debugger
            return {
                 ...state, userId: action.userId
            }
        }
        case CHECK_ID_USER: {
            return {
                ...state,
                 id: state.userId
            }
        }
        case SET_OBJECTS_SUCCESS: {
            return {
                ...state, ...action.objects
            }
        }

        default:
            return state
    }
}
export const checkIdUser = (id) => ({type: CHECK_ID_USER, id})
export const putStatusID = (userId) => ({type: ID_STATUS,userId})
export const setObjectsSuccess = (objects) => ({
    type: SET_OBJECTS_SUCCESS, objects: objects
});

// export const getObjects = (folderId) => async (dispatch, getState) => {
//     try{
//         let objects = await checkDeckAPI.getObjects(folderId);
//         dispatch(setObjectsSuccess(objects))
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

export default checkDeckReducer;