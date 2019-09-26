import React from 'react'
import {connect} from "react-redux";
import './userEdit.scss';


let UserEdit = (props) => {

	return (
		<div className='wrapper'>
			UsersEdit
		</div>
	)
}

let mstp = (state) => {
	return {

	}
}

export default connect(mstp, {})(UserEdit);