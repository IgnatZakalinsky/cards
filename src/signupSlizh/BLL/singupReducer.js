import {userAPI} from "../api/api";
const PUT_ID = 'PUT_ID';
const GIVE_ID = 'GIVE_ID';

let initialState = {
	text: 'text',
	id: 1,
	loginId: 'admin',
	passwordId: 'password',
	isSuccess: true
};

const singupReducer = (state = initialState, action) => {

	switch (action.type) {
		case  PUT_ID: {
			return  {
				...state,
				text: action.text
			};
		}
		case  GIVE_ID: {
			return  {
				...state,
				id: state.text
			};
		}
		default:
			return state;

	}
};

export const putStatus = (text) => ({type: PUT_ID, text});
export const giveStatus = () => ({type: GIVE_ID });

/*export const updateStatus = (status) => (dispatch) => {
	userAPI.signup(status)
		.then(response => {
			if (response.data.resultCode === 0){
				dispatch(putStatus(status));
			}
		})
};*/

export default singupReducer;