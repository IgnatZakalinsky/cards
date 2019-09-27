import React from 'react'
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import './usersList.scss'
import {useEffect} from 'react';
import {deleteUser, getUsers} from "../BLL/singupReducer";
import {getUser} from "../../userEditSlizh/BLL/userEditReducer";


let UsersList = (props) => {

	useEffect(() => {
		props.getUsers();
	}, []);

	let user = props.users.map(user => {
		return (
			<div key={user.id} className={'login'}>
				<NavLink to={`/userEdit/${user.id}`}><button >{user.login}</button></NavLink>
				<div className='wrap-btn'>
					<button onClick={()=>{props.deleteUser(user.id)}} className='btn btn-delete'>Delete</button>
				</div>
			</div>)
	})
	return (
		<div className='wrapper'>
			<div><span>Маслята: </span></div>
			<div className="user">{user}</div>
		</div>
	)
}

let mstp = (state) => {
	return {
		users: state.users.users
	}
}

export default connect(mstp, {getUsers, deleteUser, getUser})(UsersList);