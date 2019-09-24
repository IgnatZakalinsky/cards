import React from 'react';
import { connect } from 'react-redux'
import { setIdProfile } from '../BLL/profileReducer';
import { NavLink } from 'react-router-dom'
import { getID, deleteID } from '../DAL/axios';
import { checkIdUser } from '../../checkDeckZaicev/BLL/checkDeckReducer';



function Profile(props) {

  let setID = (event) => {
    props.setID(event.target.value)
    //thunk,which getAPI on server and received info about user by ID)
    props.getID(event.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    alert(props.id)
  }

  let deleteID = (id) => {
    //thunk, which delete user by ID
    props.deleteID(id)
  }

  let checkDeck = (id) => {
    debugger
    props.checkDeck(id)
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input type="text" value={props.id} onChange={setID} />
        <input type="submit" />
      </form>

      <div>
        Text [ user ]
      </div>

      <NavLink to={"/checkDeck"}>
        <button onClick={() => checkDeck(props.id)}>checkCard</button>
      </NavLink>

      <button onClick={() => deleteID(props.id)}>delete user id</button>
    </div>
  );
}


let mapStatetoProps = (state) => {
  return {
    id: state.profile.id
  }
}

let mapDispatchtoProps = (dispatch) => {
  return {
    getID: (id) => dispatch(getID(id)),
    setID: (id) => dispatch(setIdProfile(id)),
    deleteID: (id) => dispatch(deleteID(id)),
    checkDeck: (id) => dispatch(checkIdUser(id))
  }

}
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
