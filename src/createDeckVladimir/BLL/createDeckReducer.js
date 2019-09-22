const initialState = {
    id: null,
    pathId: null
};

const createDeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ID':
        case 'SET_PATH_ID':{
            return {...state, ...action.payload}
        }
        default:
            return state
    }
};

export const setId = (id) => ({type: 'SET_ID',payload:{id}});
export const setPathId = (pathId) => ({type: 'SET_PATH_ID',payload:{pathId}});

export default createDeckReducer;