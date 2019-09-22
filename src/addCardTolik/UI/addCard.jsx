import React from 'react'
import SetUserDeck from "./setUsersDeck";
import {connect} from 'react-redux'
import {putDeckSuccess, putIdSuccess} from "../BLL/addCardReducer";


let AddCard = (props) => {
    return (
        <div>

            <SetUserDeck cards={props.cards} putIdSuccess={props.putIdSuccess}  putDeckSuccess={props.putDeckSuccess}/>
            <div><input/>Input question</div>
            <div><input/>Input answer</div>

            <div>Text isSuccess ИГНАТ Что ЭТО????? ВНИМАНИЕ!!!</div>


            <div>
                <button>addCard</button>
            </div>
            <div>
                <button>ClearForNew</button>
            </div>
            <div>
                <button>Button Navlink to profile</button>
            </div>


        </div>
    )
}

let mstp = (state) => {
    return {
        cards: state.addCard.cards
    }
}

export default connect(mstp, {putIdSuccess,putDeckSuccess,})(AddCard)

