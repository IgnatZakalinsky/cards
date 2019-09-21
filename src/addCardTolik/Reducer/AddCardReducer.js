// const SET_USER = 'SET_USER'

const initialState = {


}

const AddCardReducer = (state = initialState, action) => {
    // switch (action.type) {
        // case SET_USER:
        //     return {
        //         // ...state,
        //         // orders: [...state.orders,...action.orders]
        //     };
        // case CLEAR_ORDER:
        //     return {
        //         ...state,
        //         orders: []
        //     };
        // case ADD_ORDER:
        //     return {
        //         ...state,
        //         orders: [...state.orders,
        //             action.fakeorder
        //         ]
        //     };
        // case EDIT_ORDER:
        //     return {
        //         ...state,
        //         orders: state.orders.map(o => {
        //             if (o.id === action.newOrder.id) return action.newOrder
        //             return o
        //         })
        //     };
        // case SELECT_ORDER:
        //     return {
        //         ...state,
        //         orders: state.orders.map(o => {
        //             if (o.id === action.id) return {...o, status: action.newstatus}
        //             return o
        //         })
        //     };
        // case EDIT_MODE_ORDER:
        //     return {
        //
        //         ...state,
        //         orders: state.orders.map(o => {
        //             if (o.id === action.id) return {...o, editMode: true}
        //             return o
        //         })
        //     };
        //
        // case DELETE_ORDER:
        //     return {
        //         ...state,
        //         orders: state.orders.filter(o=>o.id !== action.id)
        //
        //     };

    //     default:
    //         return state
    // }
}

// export const setOrdersSuccess = (userId,userId) => ({type: SET_USER, userId,userId})
// // export const addOrderSuccess = (fakeorder) => ({type: ADD_ORDER, fakeorder})
// // export const editOrderSuccess = (newOrder) => ({type: EDIT_ORDER, newOrder})
// // export const editModeSuccsess = ( id) => ({type: EDIT_MODE_ORDER, id})
// // export const deleteModeSuccsess = (id) => ({type: DELETE_ORDER,id})
// // export const clearOrderSuccsess = () => ({type: CLEAR_ORDER})


export default AddCardReducer