import {userAPI} from "../api/api";
import {setIdProfile} from "../../profileNatafiona/BLL/profileReducer";
import {giveStatus} from "../../signupSlizh/BLL/singupReducer";


const GET_USERS = 'GET_USERS';
const DELETE_USER = 'DELETE_USER';


let initialState = {
	users: []
};

const userEditReducer = (state = initialState, action) => {

	switch (action.type) {
		case  GET_USERS: {
			return {
				...state,
				users: action.users
			};
		}
		case  DELETE_USER: {
			return {
				...state,
				users: state.users.filter((user)=> user.id !== action.id )
			};
		}


		default:
			return state;

	}
};

export const setUsersState = (users) => ({type: GET_USERS, users});
export const deleteUserState = (id) => ({type: DELETE_USER, id});

export const createUser =() => async (dispatch, getState) => {
	try {
		let user= await userAPI.createUser(getState().usersEdit.login, getState().usersEdit.password)
		console.log('createUser ',user)
		dispatch(giveStatus(user.data.id))
		dispatch(setIdProfile(user.data.id))
	} catch (e){
		alert( e)
	}

}



export const getUsers =() => async (dispatch) => {
	try {
		let users = await userAPI.getUsers()
		console.log('запрос на получение: ',users)
		dispatch(setUsersState(users.data))
	} catch (e){
		alert( e)
	}
}

export const deleteUser =(id) => async (dispatch) => {
	try {
		let users = await userAPI.deleteUser(id)
		console.log('запрос на удаление: ',users)
		dispatch(deleteUserState(id))
	} catch (e){
		alert( e)
	}
}


export default userEditReducer;