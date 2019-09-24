import  React from 'react'
import {connect} from "react-redux";
import {
	createUser,
	giveStatus,
	postLogin,
	postPassword,
	postRepeatPassword,
	setSuccess
} from "../BLL/singupReducer";
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import s from "./signup.module.css"



let Signup = (props) => {

	const [color, setColor] = useState(0);

	let onTextChange=(e)=>{
		let text=e.currentTarget.value
		props.putStatus(text)
	}


	let addUsers = () =>{
		console.log('первый', props.password, 'второй', props.repeatPassword )
		if (props.password === props.repeatPassword ) {
			props.createUser( props.password, props.login)
			props.setSuccess(true)
		}  else {
			props.setSuccess(false)
			setColor(s.red)
		}
	}
	let onLoginChange=(e)=>{
		let login=e.currentTarget.value
		props.postLogin(login)
	}

	let onPasswordChange=(e)=>{
		let password=e.currentTarget.value
		props.postPassword(password)
	}

	let repeatOnPasswordChange=(e)=>{
		let repeatPassword=e.currentTarget.value
		props.postRepeatPassword(repeatPassword)
	}


	return (
		<div>
			<div><span>Id приходит сюда:</span>{props.id}</div>

			<div>Sign Up <span>масленок</span></div>
			<div><input type="text" placeholder="Login" onChange={onLoginChange}/></div>
			<div><input className={color} type="password" placeholder="Password" onChange={onPasswordChange}/></div>
			<div><input className={color} type="password" placeholder="Repeat password" onChange={repeatOnPasswordChange}/></div>
			<div>
				<NavLink to={"/profile"}>
					<button onClick={addUsers}>Sign Up</button>
				</NavLink>

			</div>
		</div>
	)
}

let mstp =(state)=> {
	return {
		id: state.singup.id,
		login: state.singup.login,
		password: state.singup.password,
		repeatPassword: state.singup.repeatPassword,
		isSuccess: state.singup.isSuccess
	}
}

export default connect(mstp, { giveStatus,postLogin, postPassword,postRepeatPassword,createUser,setSuccess}) (Signup);