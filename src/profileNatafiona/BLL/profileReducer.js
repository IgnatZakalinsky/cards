
let inisialState = {
    id: "",
    name:""
};

//action

export const setIdProfile = (id) => {
    return {
        type: SET_ID_PFOFILE,
        id
    }
}

export const setUserToStore = (data) => {
    return {
        type: SET_USER,
        data
    }
}


//TYPE ACTION

const SET_ID_PFOFILE = "SET_ID_PROFILE"
const SET_USER = "SET_USER"


//reducer

let profileReducer = (state = inisialState, action) => {

    switch (action.type) {
        case SET_ID_PFOFILE:
            return {
                id: action.id
            };
        case SET_USER:
            return {
                ...state,
                ...state.id,
                name: action.data.login
            }
        default: return state
    }

}

export default profileReducer