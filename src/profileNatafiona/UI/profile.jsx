import React from 'react';
import { connect } from 'react-redux'
import { setIdProfile } from '../BLL/profileReducer';
import { NavLink } from 'react-router-dom'
import { getUserIdfromServerThunk, deleteUserFromServerThunk } from '../DAL/axios';
import { checkIdUser } from '../../checkDeckZaicev/BLL/checkDeckReducer';



function Profile(props) {

  let setID = (event) => {
    props.setID(event.target.value)
    //thunk,which getAPI on server and received info about user by ID)
    console.log(props.id)
    props.getUserIdfromServer()
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    alert(props.id)
  }


  let checkDeck = (id) => {
    props.checkDeck(id)
  }
  let deleteUser = ()=>{
    props.deleteUser()
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input type="text" value={props.id} onChange={setID} />
        <input type="submit" />
      </form>

      <div>
        {props.name}
      </div>

      <NavLink to={"/checkDeck"}>
        <button onClick={() => checkDeck(props.id)}>checkCard</button>
      </NavLink>

      <button onClick={deleteUser}>delete user id</button>
    </div>
  );
}


let mapStatetoProps = (state) => {
  return {
    id: state.profile.id,
    name:state.profile.name
  }
}

let mapDispatchtoProps = (dispatch) => {
  return {
    getUserIdfromServer: () => dispatch(getUserIdfromServerThunk()),
    setID: (id) => dispatch(setIdProfile(id)),
    checkDeck: (id) => dispatch(checkIdUser(id)),
    deleteUser:()=>dispatch(deleteUserFromServerThunk())
  }

}
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
