const CHECK_ID_USER = 'checkDeckReducer/CHECK_ID_USER';
const ID_STATUS = 'checkDeckReducer/TEXT_STATUS';

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

        default:
            return state
    }
}
export const checkIdUser = (id) => ({type: CHECK_ID_USER, id})
export const putStatusID = (userId) => ({type: ID_STATUS,userId})

export default checkDeckReducer;