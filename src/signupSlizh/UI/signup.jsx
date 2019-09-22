import  React from 'react'
import {connect} from "react-redux";
import {giveStatus, putStatus} from "../BLL/singupReducer";




let Signup = (props) => {

	let onTextChange=(e)=>{
		let text=e.currentTarget.value
		props.putStatus(text)
	}

	let putId = () => {
		props.giveStatus()
	}

	return (
		<div>
			<div><span>Id приходит сюда:</span>{props.id}</div>
			<div>
				<span>Ввожу сюда Id: </span>
				<input type="text" placeholder="ID" onChange={onTextChange}/>
			</div>
			<button onClick={putId}>Кнопка</button>

			<div>Sign Up <span>масленок</span></div>
			<div><input type="text" placeholder="Login"/></div>
			<div><input type="password" placeholder="Password"/></div>
			<div><input type="password" placeholder="Repeat password"/></div>
			<div>
				<button>Sign Up</button>
			</div>
		</div>
	)
}

let mstp =(state)=>{
	return {
		id: state.singup.id
	}
}

export default connect(mstp, {putStatus, giveStatus}) (Signup);