import {userAPI} from "../api/api";
import {setIdProfile} from "../../profileNatafiona/BLL/profileReducer";

const GIVE_ID = 'GIVE_ID';
const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = ' SET_PASSWORD';
const SET_REPEAT_PASSWORD = 'SET_REPEAT_PASSWORD';
const SET_SUCCESS = 'SET_SUCCESS';

let initialState = {
	login:'login',
	password: 'pas',
	repeatPassword: 'pas',
	isSuccess: true
};

const singupReducer = (state = initialState, action) => {

	switch (action.type) {
		case  GIVE_ID: {
			return {
				...state,
				id: action.id
			};
		}
		case  SET_LOGIN: {
			return {
				...state,
				login: action.login
			};
		}
		case  SET_PASSWORD: {
			return {
				...state,
				password: action.password
			};
		}
		case  SET_REPEAT_PASSWORD: {
			return {
				...state,
				repeatPassword: action.repeatPassword
			};
		}
		case  SET_SUCCESS: {
			return {
				...state,
				isSuccess: action.isSuccess
			};
		}
		default:
			return state;

	}
};

export const giveStatus = (id) => ({type: GIVE_ID, id});
export const postLogin = (login) => ({type: SET_LOGIN, login});
export const postPassword = (password) => ({type: SET_PASSWORD, password});
export const postRepeatPassword = (repeatPassword) => ({type: SET_REPEAT_PASSWORD, repeatPassword});
export const setSuccess = (isSuccess) => ({type: SET_SUCCESS, isSuccess});


export const createUser =() => async (dispatch, getState) => {

	try {
		let user= await userAPI.signup(getState().singup.login, getState().singup.password)
		console.log(user)
		dispatch(giveStatus(user.data.id))
		dispatch(setIdProfile(user.data.id))
	} catch (e){
		alert( e)
	}

}

export default singupReducer;