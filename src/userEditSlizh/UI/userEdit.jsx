import React from 'react'
import {connect} from "react-redux";
import './userEdit.scss';


let UserEdit = (props) => {

	return (
		<div className='wrapper'>
			{/*<div>User id: {props.usersEdit.id}</div>
			<div>Login: {props.usersEdit.login}</div>
			<div>Password: {props.usersEdit.pass}</div>
			<div>Admin: {props.usersEdit.admin}</div>
			<div>Deck: {props.usersEdit.deck}</div>*/}
		</div>
	)
}

let mstp = (state) => {
	return {
		id: state.usersEdit.id,
		login: state.usersEdit.login,
		pass: state.usersEdit.pass,
		admin: state.usersEdit.admin,
		deck: state.usersEdit.deck
	}
}

export default connect(mstp, {})(UserEdit);