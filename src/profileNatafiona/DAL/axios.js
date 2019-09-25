import { profileAPI } from './axios-instance'
import { setUserToStore } from '../BLL/profileReducer';


export const getUserIdfromServerThunk = () => async (dispatch, getState) => {
    let dataUser = await profileAPI.getUserFromServer(getState().profile.id);
    console.log(`profile:${dataUser.data.id}_${dataUser.data.login}`);
    dispatch(setUserToStore(dataUser.data));
}

export const deleteUserFromServerThunk = () => async(getState)=>{
    await profileAPI.deleteUserFromServer(getState().profile.id);

}