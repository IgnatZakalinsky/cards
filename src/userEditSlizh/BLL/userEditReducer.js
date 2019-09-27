import {userAPI} from "../api/api";
import {setIdProfile} from "../../profileNatafiona/BLL/profileReducer";
import {giveStatus} from "../../signupSlizh/BLL/singupReducer";


const GET_USER = 'GET_USER';



let initialState = {
	user: {}
};

const userEditReducer = (state = initialState, action) => {

	switch (action.type) {
		case  GET_USER: {
			return {
				...state,
				user: action.user
			};
		}

		default:
			return state;
	}
};

export const setUser = (user) => ({type: GET_USER, user});

export const getUser =(id) => async (dispatch) => {
	try {
		let res = await userAPI.getUser(id)
		console.log('запрос на получение: ',res)
		dispatch(setUser(res.data))
	} catch (e){
		alert( e)
	}
}

export default userEditReducer;