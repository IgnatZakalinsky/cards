
let inisialState = {id:''};

//action

export const setIdProfile = (id) => {
    return {
        type: SET_ID_PFOFILE,
        id
    }
}

//TYPE ACTION

const SET_ID_PFOFILE = "SET_ID_PROFILE"


//reducer

let profileReducer = (state = inisialState, action) => {
    
    switch (action.type) {
        case SET_ID_PFOFILE: return {
           id:action.id
        };
        default: return state
    }

}

export default profileReducer