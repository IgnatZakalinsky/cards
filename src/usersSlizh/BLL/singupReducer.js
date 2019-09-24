import {userAPI} from "../api/api";


const GIVE_ID = 'GIVE_ID';


let initialState = {
	login:'login',
};

const usersListReducer = (state = initialState, action) => {

	switch (action.type) {
		case  GIVE_ID: {
			return {
				...state,
				id: action.id
			};
		}


		default:
			return state;

	}
};

export const giveStatus = (id) => ({type: GIVE_ID, id});



export const createUser =() => async (dispatch, getState) => {

	try {
		let user= await userAPI.signup(getState().singup.login, getState().singup.password)
		console.log(user)
		dispatch(giveStatus(user.data.id))

	} catch (e){
		alert( e)
	}

}

export default usersListReducer;