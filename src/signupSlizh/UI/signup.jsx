import  React from 'react'




let Signup = (props) => {

	putId = (id) => {
		props.putStatus(id)
	}

	return (
		<div>
			<div><span>Id приходит сюда:</span></div>
			<div><span>Ввожу сюда Id: </span><input type="text" placeholder="ID"/></div>
			<button onClick={props.putId}>Кнопка</button>

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


export default Signup;