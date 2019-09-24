import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {checkIdUser, putStatusID} from "../BLL/checkDeckReducer";
import {getObjectsThunk} from "../BLL/checkDeckThunkCreator";

const CheckDeck = (props) => {
    let changeId = (e) => {
        let numberID = e.currentTarget.value
        props.putStatusID(numberID)
    }
    let checkId = () => {
        props.checkIdUser()
    }

    return (
        <div>

            <div>
                <div><span>Text ID:{props.id ? props.id : " Input ID user"} </span></div>
                <div><input type="text" placeholder={"ID"} onChange={changeId}/></div>
                <div>
                    <button onClick={checkId}>setID</button>
                </div>
            </div>

            <div>
                <button>folder</button>
            </div>
            <div>
                <button>deck</button>
            </div>
            <div><span>Text cards</span></div>
            <div>
                <NavLink to='/card'><button>card</button></NavLink>
            </div>
            <div>
                <NavLink to='/createDeck'><button>createDeck</button></NavLink>
            </div>
            <div>
                <NavLink to='/profile'><button>profile</button></NavLink>
            </div>
        </div>
    );
}
let mstp = (state) => {
    return{
        id: state.checkDeck.id
    }
}

export default connect(mstp,{getObjectsThunk,checkIdUser, putStatusID})(CheckDeck);
