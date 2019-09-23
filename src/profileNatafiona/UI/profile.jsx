import React from 'react';
import { connect } from 'react-redux'
import { setIdProfile } from '../BLL/profileReducer';
import {NavLink} from 'react-router-dom'



function Profile(props) {

  let setID = (event) => {
    props.setID(event.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    alert(props.id)
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
      <NavLink to={"/checkDeck"}><button>checkCard</button></NavLink>
     <NavLink><button>delete user id</button></NavLink> 
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
    setID: (id) => dispatch(setIdProfile(id))
  }

}
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
