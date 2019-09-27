import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import './userEdit.scss';
import {getUser} from "../BLL/userEditReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


let UserEdit = (props) => {



	useEffect(() => {
		props.getUser(props.match.params.id)

	}, []);

	return (
		<div className='wrapper'>
			<div>User id: <span>{props.id}</span></div>
			<div>Login: {props.login}</div>
			<div>Password: {props.pass}</div>
			<div>Admin: {props.admin}</div>
			{/*<div>Deck: {props.deck}</div>*/}
			<button onClick={()=>props.getUser(8)}>get</button>
		</div>
	)
}

let mstp = (state) => {
	return {
		id: state.usersEdit.user.id,
		login: state.usersEdit.user.login,
		pass: state.usersEdit.user.pass,
		admin: state.usersEdit.user.admin,
		deck: state.usersEdit.user.deck
	}
}

export default compose (
	connect(mstp, {getUser}), withRouter)(UserEdit);