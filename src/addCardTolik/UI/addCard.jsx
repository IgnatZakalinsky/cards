import React from 'react'
import SetUserDeck from "./setUsersDeck";
import { connect } from 'react-redux'
import {setUsersSuccess} from "../BLL/addCardReducer";


// --/addCard
// Input userId2
// Input deckId2
// Button set(uId, cId)
// Input question
// Input answer
// Text isSuccess
// Button addCard
// Button clearForNew
// Button NavLink
// to profile


let AddCard = (props) =>{

    // let addCard = ()=>{
    //     // props.setOrdersSuccess
    // }

    return(
        <div>

            <SetUserDeck id={props.id} setUsersSuccess={props.setUsersSuccess}/>
            <div><input/>Input question</div>
            <div><input/>Input answer</div>

            <div>Text isSuccess  ИГНАТ Что ЭТО????? ВНИМАНИЕ!!!</div>


            <div><button>addCard</button></div>
            <div><button>ClearForNew</button></div>
            <div><button>Button Navlink to profile</button></div>


        </div>
    )
}

let mstp = (state) =>{
    return {
        cards: state.addCard.cards
    }
}

export default connect(mstp,{setUsersSuccess}) (AddCard)

