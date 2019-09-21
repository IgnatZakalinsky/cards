import {userAPI} from "../api/api";
const PUT_ID = 'PUT_ID';

let initialState = {
	id: 1,
	loginId: 'admin',
	passwordId: 'password',
	isSuccess: true
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case  PUT_ID: {
			return  {
				...state,
				id: action.id
			};
		}
		default:
			return state;

	}
};

export const putStatus = (id) => ({type: PUT_ID, id});

/*export const updateStatus = (status) => (dispatch) => {
	userAPI.signup(status)
		.then(response => {
			if (response.data.resultCode === 0){
				dispatch(putStatus(status));
			}
		})
};*/

export default profileReducer;