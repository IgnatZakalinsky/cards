import axios from './axios-instance'
///import  from '../BLL/profileReducer'

export let getID = (id) => async (dispatch) => {
    try {
        let res = await axios.get(`/users/${id}`)
        console.log(`Inform users:id_${res.data.id},name_${res.data.login}`)
    }
    catch{
        console.log('Error')
    }
}

export let deleteID = (id) => async (dispatch) => {
    try {
        debugger
        let res = await axios.delete(`/users/${id}`)
        console.log(`${res.data}`)
    }
    catch{
        console.log('Error')
    }
}