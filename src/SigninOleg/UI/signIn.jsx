import  React from 'react'
import {connect} from "react-redux";
import {putStatus} from "../BLL/signinReduser";





let Signin = (props) => {

    let putId = (id) => {
        props.putStatus(id)
    }

    return (
        <div>
            <div><span>Id приходит сюда:</span></div>
            <div><span>Ввожу сюда Id: </span><input type="text" placeholder="ID"/></div>
            <button onClick={putId}>Кнопка</button>

            <div>Sign Ip <span>масленок</span></div>
            <div><input type="text" placeholder="Login"/></div>
            <div><input type="password" placeholder="Password"/></div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

let mstp =(state)=>{
    return {
        id: state.id
    }
}

export default connect(mstp, {putStatus}) (Signin);