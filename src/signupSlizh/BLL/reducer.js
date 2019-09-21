import {userAPI} from "../api/api";
const PUT_STATUS = 'PUT_STATUS';

let initialState = {
	loginId: 'admin',
	passwordId: 'password',
	isSuccess: true
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case  PUT_STATUS: {
			return  {
				...state,
				loginId: action.loginId,
				passwordId: action.passwordId
			};
		}
		default:
			return state;

	}
};

export const putStatus = (status) => ({type: PUT_STATUS, status});

export const updateStatus = (status) => (dispatch) => {
	userAPI.signup(status)
		.then(response => {
			if (response.data.resultCode === 0){
				dispatch(putStatus(status));
			}
		})
};

export default profileReducer;